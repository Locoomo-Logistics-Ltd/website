export function waitlistEmail(role: string) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <body style="margin:0;padding:0;background:#f4f7fc;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fc;padding:40px 20px;">
        <tr>
          <td align="center">

            <table width="100%" style="max-width:520px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid rgba(0,108,223,0.12);">

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

              <!-- BODY -->
              <tr>
                <td style="padding:40px;">
                  <p style="margin:0 0 8px;font-size:28px;">🎉</p>

                  <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#000E2E;">
                    You're on the list!
                  </h1>

                  <p style="margin:0 0 20px;font-size:15px;color:#3a5075;line-height:1.7;">
                    Thanks for joining the Locoomo waitlist. We'll be in touch the moment we launch in your area.
                  </p>

                  <div style="display:inline-block;background:rgba(0,108,223,0.07);border:1px solid rgba(0,108,223,0.18);border-radius:100px;padding:6px 16px;margin-bottom:28px;">
                    <p style="margin:0;font-size:12px;font-weight:600;color:#006CDF;text-transform:uppercase;">
                      Signed up as: ${role}
                    </p>
                  </div>

                  <div style="text-align:center;margin-bottom:32px;">
                    <a href="https://locoomo.com"
                      style="display:inline-block;background:#006CDF;color:#fff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:12px;">
                      Learn More →
                    </a>
                  </div>

                  <p style="margin:0;font-size:14px;color:#7a8fa8;">
                    Questions? <a href="mailto:info@locoomo.com">info@locoomo.com</a>
                  </p>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="background:#f4f7fc;padding:20px 40px;text-align:center;">
                  <p style="margin:0;font-size:12px;color:#7a8fa8;">
                    © ${new Date().getFullYear()} Locoomo · Lagos, Nigeria
                  </p>
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}