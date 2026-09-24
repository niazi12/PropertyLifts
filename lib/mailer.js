import nodemailer from "nodemailer";

export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Sends a notification email to the company inbox.
// `fields` is a list of [label, value] pairs shown in the email.
export async function sendNotification({ subject, heading, fields, replyTo, fromName }) {
  const port = Number(process.env.SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // SSL on 465, STARTTLS on 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const visible = fields.filter(([, value]) => value);
  const text = [heading, "", ...visible.map(([label, value]) => `${label}: ${value}`)].join("\n");
  const html = `
    <h2>${escapeHtml(heading)}</h2>
    ${visible
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`
      )
      .join("")}
  `;

  await transporter.sendMail({
    from: `"${fromName.replace(/["<>\r\n]/g, "")}" <${process.env.SMTP_USER}>`,
    replyTo,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject: subject.replace(/[\r\n]/g, " "),
    text,
    html,
  });
}
