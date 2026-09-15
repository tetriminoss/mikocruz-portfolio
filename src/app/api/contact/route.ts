import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "CruzMichaelJG@gmail.com";
// Resend's shared address works with zero setup, but only delivers to the
// account owner's own inbox. Once you verify a domain in Resend, switch this
// to something like "Portfolio <hello@yourdomain.com>".
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email is not configured on the server yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: { name?: string; email?: string; message?: string; company?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = body;

  // Honeypot: real visitors never fill this hidden field in.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
