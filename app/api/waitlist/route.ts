import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from "dns/promises";

// ── Email validation ───────────────────────────────────────────
function isValidEmailFormat(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.trim());
}

async function domainCanReceiveEmail(email: string): Promise<boolean> {
  try {
    const domain = email.split("@")[1];
    const records = await dns.resolveMx(domain);
    return records.length > 0;
  } catch {
    return false;
  }
}

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "tempmail.com", "throwam.com",
  "yopmail.com", "sharklasers.com", "trashmail.com", "maildrop.cc",
  "dispostable.com", "fakeinbox.com", "spamgourmet.com", "getairmail.com",
  "mailnull.com", "discard.email", "throwaway.email", "mailnesia.com",
]);

function isDisposableDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return DISPOSABLE_DOMAINS.has(domain);
}

// ── Google Sheet via Apps Script ───────────────────────────────
async function saveToSheet(
  name: string,
  email: string,
  phone: string,
  role: string
): Promise<{ success?: boolean; error?: string }> {
  const res = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, role }),
  });

  return res.json();
}

// ── Nodemailer ─────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@locoomo.com",
    pass: process.env.ZOHO_SMTP_PASSWORD,
  },
});

// ── Route handler ──────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, role } = await req.json();

    const trimmedName  = name?.trim();
    const trimmedEmail = email?.trim().toLowerCase();
    const trimmedPhone = phone?.trim();

    // 1. Required fields
    if (!trimmedName) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!trimmedPhone) {
      return NextResponse.json({ error: "Please enter your phone number." }, { status: 400 });
    }

    const phoneRegex = /^[+\d][\d\s\-]{6,}$/;
    if (!phoneRegex.test(trimmedPhone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    // 2. Email format
    if (!trimmedEmail || !isValidEmailFormat(trimmedEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // 3. Disposable email
    if (isDisposableDomain(trimmedEmail)) {
      return NextResponse.json({ error: "Disposable email addresses are not allowed." }, { status: 400 });
    }

    // 4. MX record
    const domainExists = await domainCanReceiveEmail(trimmedEmail);
    if (!domainExists) {
      return NextResponse.json(
        { error: "That email domain doesn't appear to exist. Please check and try again." },
        { status: 400 }
      );
    }

    // 5. Save to sheet — Apps Script handles duplicate check
    const sheetResult = await saveToSheet(trimmedName, trimmedEmail, trimmedPhone, role);

    if (sheetResult.error === "duplicate") {
      return NextResponse.json(
        { error: "You're already on the waitlist! We'll be in touch soon." },
        { status: 409 }
      );
    }

    if (!sheetResult.success) {
      return NextResponse.json(
        { error: "Failed to save your details. Please try again." },
        { status: 500 }
      );
    }

    // 6. Confirmation email to user
    await transporter.sendMail({
      from: '"Locoomo" <info@locoomo.com>',
      to: trimmedEmail,
      subject: "You're on the Locoomo waitlist! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
          <body style="margin:0;padding:0;background:#f4f7fc;font-family:'DM Sans',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fc;padding:40px 20px;">
              <tr><td align="center">
                <table width="100%" style="max-width:520px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid rgba(0,108,223,0.12);">

                  <tr>
                    <td style="background:linear-gradient(135deg,#0050b3 0%,#006CDF 50%,#3D93E0 100%);padding:32px 40px;text-align:center;">
                      <div style="display:inline-flex;align-items:center;gap:10px;background:#fff;padding:10px 20px;border-radius:10px;">
                        <img src="https://locoomo.com/locoomo.png" width="28" alt="Locoomo" />
                        <span style="font-size:17px;font-weight:800;color:#000E2E;font-family:'Sora',Arial,sans-serif;">LOCOOMO</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:40px;">
                      <p style="margin:0 0 8px;font-size:28px;">🎉</p>
                      <h1 style="margin:0 0 12px;font-family:'Sora',Arial,sans-serif;font-size:22px;font-weight:700;color:#000E2E;letter-spacing:-0.02em;">
                        You're on the list, ${trimmedName}!
                      </h1>
                      <p style="margin:0 0 20px;font-size:15px;color:#3a5075;line-height:1.7;">
                        Thanks for joining the Locoomo waitlist. We're building something
                        that'll change the way packages move across Nigeria — and you'll
                        be among the first to experience it.
                      </p>
                      <p style="margin:0 0 28px;font-size:15px;color:#3a5075;line-height:1.7;">
                        We'll reach out the moment we launch in your area.
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fc;border-radius:12px;padding:20px;margin-bottom:28px;border:1px solid rgba(0,108,223,0.1);">
                        <tr>
                          <td style="padding:6px 0;font-size:13px;color:#7a8fa8;width:80px;">Name</td>
                          <td style="padding:6px 0;font-size:13px;color:#000E2E;font-weight:600;">${trimmedName}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-size:13px;color:#7a8fa8;">Email</td>
                          <td style="padding:6px 0;font-size:13px;color:#000E2E;font-weight:600;">${trimmedEmail}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-size:13px;color:#7a8fa8;">Phone</td>
                          <td style="padding:6px 0;font-size:13px;color:#000E2E;font-weight:600;">${trimmedPhone}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-size:13px;color:#7a8fa8;">Role</td>
                          <td style="padding:6px 0;font-size:13px;color:#006CDF;font-weight:600;text-transform:capitalize;">${role}</td>
                        </tr>
                      </table>

                      <div style="text-align:center;margin-bottom:32px;">
                        <a href="https://locoomo.com" style="display:inline-block;background:#006CDF;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:12px;">
                          Learn More About Locoomo →
                        </a>
                      </div>

                      <p style="margin:0;font-size:14px;color:#7a8fa8;">
                        Questions? <a href="mailto:info@locoomo.com" style="color:#006CDF;text-decoration:none;">info@locoomo.com</a>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="background:#f4f7fc;padding:20px 40px;border-top:1px solid rgba(0,108,223,0.08);">
                      <p style="margin:0;font-size:12px;color:#7a8fa8;text-align:center;">
                        © ${new Date().getFullYear()} Locoomo · Lagos, Nigeria<br/>
                        You're receiving this because you signed up at locoomo.com
                      </p>
                    </td>
                  </tr>

                </table>
              </td></tr>
            </table>
          </body>
        </html>
      `,
    });

    // 7. Internal notification
    await transporter.sendMail({
      from: '"Locoomo Waitlist" <info@locoomo.com>',
      to: "info@locoomo.com",
      subject: `New waitlist signup: ${trimmedName} (${trimmedEmail})`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px;max-width:480px;">
          <h2 style="color:#000E2E;margin:0 0 16px;">New Waitlist Signup</h2>
          <p style="margin:0 0 8px;font-size:15px;color:#3a5075;"><strong>Name:</strong> ${trimmedName}</p>
          <p style="margin:0 0 8px;font-size:15px;color:#3a5075;"><strong>Email:</strong> ${trimmedEmail}</p>
          <p style="margin:0 0 8px;font-size:15px;color:#3a5075;"><strong>Phone:</strong> ${trimmedPhone}</p>
          <p style="margin:0 0 8px;font-size:15px;color:#3a5075;"><strong>Role:</strong> ${role}</p>
          <p style="margin:0;font-size:13px;color:#7a8fa8;">Received: ${new Date().toUTCString()}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("[Waitlist API error]", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}