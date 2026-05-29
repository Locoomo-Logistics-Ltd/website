import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@locoomo.com",
    pass: process.env.ZOHO_SMTP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { email, role } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    

    // ── Email 1: Confirmation to the user ──────────────────
    await transporter.sendMail({
      from: '"Locoomo" <info@locoomo.com>',
      to: email,
      subject: "You're on the Locoomo waitlist! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#f4f7fc;font-family:'DM Sans',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fc;padding:40px 20px;">
              <tr>
                <td align="center">
                  <table width="100%" style="max-width:520px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid rgba(0,108,223,0.12);">

                    <!-- Header -->
                      <!-- HEADER -->
              <tr>
                <td style="background:linear-gradient(135deg,#0050b3 0%,#006CDF 50%,#3D93E0 100%);padding:36px 40px;text-align:center; justify-content:center;align-items:center;display:flex;">
                  
                  <div style="text-align:center;display:flex;background:#fff; justify-content:center;align-items:center;gap:10px; width:200px;padding:10px;border-radius:10px">
                    <img
                      src="https://locoomo.com/locoomo.png"
                      width="35"
                      alt="Locoomo"
                      style="margin-bottom:8px;"
                    />
                    <div style="font-size:20px;font-weight:800;color:#000;font-family: 'Sora', Arial, sans-serif;">
                      LOCOOMO
                    </div>
                  </div>

                </td>
              </tr>
                    <!-- Body -->
                    <tr>
                      <td style="padding:40px;">
                        <p style="margin:0 0 8px;font-size:28px;">🎉</p>
                        <h1 style="margin:0 0 12px;font-family:'Sora',Arial,sans-serif;font-size:22px;font-weight:700;color:#000E2E;letter-spacing:-0.02em;">
                          You&apos;re on the list!
                        </h1>
                        <p style="margin:0 0 20px;font-size:15px;color:#3a5075;line-height:1.7;">
                          Thanks for joining the Locoomo waitlist. We&apos;re building something
                          that&apos;ll change the way packages move across Nigeria — and you&apos;ll
                          be among the first to experience it.
                        </p>
                        <p style="margin:0 0 28px;font-size:15px;color:#3a5075;line-height:1.7;">
                          We&apos;ll send you an email the moment we launch in your area.
                          Until then, feel free to reach out if you have any questions.
                        </p>

                        <!-- Role badge -->
                        <div style="display:inline-block;background:rgba(0,108,223,0.07);border:1px solid rgba(0,108,223,0.18);border-radius:100px;padding:6px 16px;margin-bottom:28px;">
                          <p style="margin:0;font-size:12px;font-weight:600;color:#006CDF;text-transform:uppercase;letter-spacing:0.08em;">
                            Signed up as: ${role}
                          </p>
                        </div>

                        <!-- CTA button -->
                        <div style="text-align:center;margin-bottom:32px;">
                          
                           <a href="https://locoomo.com"
                            style="display:inline-block;background:#006CDF;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:12px;"
                          >
                            Learn More About Locoomo →
                          </a>
                        </div>

                        <p style="margin:0;font-size:14px;color:#7a8fa8;line-height:1.6;">
                          Questions? Reply to this email or reach us at
                          <a href="mailto:info@locoomo.com" style="color:#006CDF;text-decoration:none;"> info@locoomo.com</a>
                        </p>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background:#f4f7fc;padding:20px 40px;border-top:1px solid rgba(0,108,223,0.08);">
                        <p style="margin:0;font-size:12px;color:#7a8fa8;text-align:center;">
                          © ${new Date().getFullYear()} Locoomo · Lagos, Nigeria<br/>
                          You&apos;re receiving this because you signed up at locoomo.com
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    // ── Email 2: Internal notification to Locoomo team ─────
    await transporter.sendMail({
      from: '"Locoomo Waitlist" <info@locoomo.com>',
      to: "info@locoomo.com",
      subject: `New waitlist signup: ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px;">
          <h2 style="color:#000E2E;margin:0 0 16px;">New Waitlist Signup</h2>
          <p style="margin:0 0 8px;font-size:15px;color:#3a5075;"><strong>Email:</strong> ${email}</p>
          <p style="margin:0 0 8px;font-size:15px;color:#3a5075;"><strong>Role:</strong> ${role}</p>
          <p style="margin:0;font-size:13px;color:#7a8fa8;">Received: ${new Date().toUTCString()}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Waitlist API error]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}