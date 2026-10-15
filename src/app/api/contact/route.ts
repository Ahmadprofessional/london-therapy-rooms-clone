import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildAdminNotificationEmail,
  buildUserConfirmationEmail,
  type ContactSubmission,
} from "@/lib/email-templates";

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
      heard_about,
      message,
      "g-recaptcha-response": recaptchaResponse,
    } = body;

    if (!email || !first_name) {
      return NextResponse.json(
        { error: "First name and email address are required." },
        { status: 400 }
      );
    }

    // Capture metadata from incoming request
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "Unknown IP";
    const referrer =
      request.headers.get("referer") ||
      "https://londontherapyroomstorent.com/";

    const submission: ContactSubmission = {
      first_name,
      last_name,
      email,
      phone,
      profession,
      room,
      heard_about,
      message,
    };

    // 1. Generate customized admin notification and user confirmation templates
    const adminEmail = buildAdminNotificationEmail(submission, {
      pageUrl: referrer,
      referrer,
      ip,
    });

    const userEmail = buildUserConfirmationEmail(submission);

    // 2. Dispatch both emails concurrently via Resend
    const [adminResult, userResult] = await Promise.allSettled([
      // Admin notification with enquiry details and record of user confirmation
      resend.emails.send({
        from: "Clinic Enquiries <info@londontherapyroomstorent.com>",
        to: ["info@londontherapyroomstorent.com"],
        cc: ["Sofiabouzi@hotmail.com"],
        replyTo: email,
        subject: adminEmail.subject,
        html: adminEmail.html,
        text: adminEmail.text,
      }),
      // Direct confirmation message delivered to the person who filled out the form
      resend.emails.send({
        from: "London Therapy Rooms <info@londontherapyroomstorent.com>",
        to: [email],
        cc: ["info@londontherapyroomstorent.com", "Sofiabouzi@hotmail.com"],
        replyTo: "info@londontherapyroomstorent.com",
        subject: userEmail.subject,
        html: userEmail.html,
        text: userEmail.text,
      }),
    ]);

    // Check admin dispatch result
    let adminError: string | null = null;
    if (adminResult.status === "rejected") {
      adminError = adminResult.reason?.message || "Failed to dispatch admin notification";
      console.error("Admin Resend send error:", adminResult.reason);
    } else if (adminResult.value.error) {
      adminError = adminResult.value.error.message;
      console.error("Admin Resend API error:", adminResult.value.error);
    }

    // Check user confirmation dispatch result
    let userConfirmationSent = false;
    if (userResult.status === "rejected") {
      console.error("User confirmation Resend send error:", userResult.reason);
    } else if (userResult.value.error) {
      console.error("User confirmation Resend API error:", userResult.value.error);
    } else {
      userConfirmationSent = true;
    }

    // If admin email failed completely, return error
    if (adminError) {
      return NextResponse.json(
        { error: `Notification failed: ${adminError}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      userConfirmationSent,
      data: {
        adminId: adminResult.status === "fulfilled" ? adminResult.value.data?.id : null,
        confirmationId: userResult.status === "fulfilled" ? userResult.value.data?.id : null,
      },
    });
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
