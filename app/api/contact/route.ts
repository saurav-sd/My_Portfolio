import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "souravdaware3@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })
      
      console.log("Resend response:", data)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
