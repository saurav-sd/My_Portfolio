import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "souravdaware3@gmail.com",
      subject: "New Contact Message",
      html: `<p>${body.message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}