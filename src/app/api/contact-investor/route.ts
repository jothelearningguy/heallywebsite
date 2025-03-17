import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, investmentRange, message, to } = body

    // Create a test account if no SMTP credentials are provided
    const testAccount = await nodemailer.createTestAccount()

    // Create reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || testAccount.user,
        pass: process.env.SMTP_PASS || testAccount.pass,
      },
    })

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"HEALLY Investor Contact" <${process.env.SMTP_FROM || 'noreply@heallyhub.com'}>`,
      to: to || 'jo@heallyhub.com',
      subject: `New Investor Contact from ${name} - ${company}`,
      text: `
Name: ${name}
Email: ${email}
Company/Fund: ${company}
Investment Range: ${investmentRange}

Message:
${message}
      `,
      html: `
<h2>New Investor Contact</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company/Fund:</strong> ${company}</p>
<p><strong>Investment Range:</strong> ${investmentRange}</p>
<br>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (process.env.NODE_ENV === 'development') {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 