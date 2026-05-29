import { waitlistEmail } from "@/lib/emails/waitlistEmail";

export default function EmailPreview() {
  const html = waitlistEmail("Developer");

  return (
    <div style={{ padding: 40, background: "#eee" }}>
      <h2>Email Preview</h2>

      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          border: "1px solid #ccc",
          background: "white",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}