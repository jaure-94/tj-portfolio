import EmailTemplate from '@/components/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  }

  try {
    // const body = await request.json()
    const body = await request.text()
    console.log('Raw body:', body)

    const parseBody = JSON.parse(body)
    const { username, email, message } = parseBody

    const { data } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['tawandajaure@outlook.com'],
      subject: `Web Development Services Enquiry: ${username}`,
      text: `${email} writes: ${message}`,
      react: <EmailTemplate username={username} email={email} message={message} />
    })

    console.log(data)

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: "Email not sent", error: error.message }, { status: 500 })
  }
}