import EmailTemplate from '@/components/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, email, message } = body

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['tawandajaure@outlook.com'],
      subject: `Web Development Services Enquiry: ${username}`,
      react: EmailTemplate({ username: username, email: email, message: message })
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}