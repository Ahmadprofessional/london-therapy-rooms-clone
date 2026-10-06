import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      first_name, 
      last_name, 
      email, 
      phone, 
      profession, 
      room, 
      message, 
      "g-recaptcha-response": recaptchaResponse 
    } = body;

    // Optional: Verify reCAPTCHA token here if you have the secret key set up on the backend
    // For now, we trust the frontend check or you can implement backend verification.

    const name = `${first_name} ${last_name}`;

    const { data, error } = await resend.emails.send({
      from: "Clinic Enquiries <info@londontherapyroomstorent.com>", 
      to: ["info@londontherapyroomstorent.com"],
      cc: ["Sofiabouzi@hotmail.com"], // As requested earlier!
      replyTo: email,
      subject: `New Clinic Enquiry: ${room} - ${name}`,
      html: `
        <h2>New Enquiry from London Therapy Rooms Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Interested Room:</strong> ${room}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
