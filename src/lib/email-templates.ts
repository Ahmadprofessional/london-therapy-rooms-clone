export interface ContactSubmission {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  profession?: string;
  room?: string;
  heard_about?: string;
  message?: string;
}

export interface SubmissionMetadata {
  pageUrl?: string;
  referrer?: string;
  ip?: string;
  timestamp?: string;
}

// Canonical production URLs (verified 200 OK)
const SITE_URL = "https://www.londontherapyroomstorent.com";
const LOGO_URL = "https://www.londontherapyroomstorent.com/images/2024/09/logo-Copypng-11-11-11-11-300x179.png";
const CLINIC_EMAIL = "info@londontherapyroomstorent.com";
const CLINIC_LANDLINE = "0207 225 3582";
const CLINIC_MOBILE = "078 1847 4041";
const CLINIC_ADDRESS = "2 Wimpole Street, Marylebone, London W1G 0EB";
const FB_URL = "https://www.facebook.com/share/g/158eL7HqPD/?mibextid=wwXIfr";
const IG_URL = "https://www.instagram.com/therapy_rooms_to_let?igsh=dGduNmoxYm9wc29t";

/**
 * Builds the user confirmation email sent to the person who filled out the form.
 * Matches the client's requested template structure, fully customized with London Therapy Rooms to Rent branding & links.
 * Styled in London Therapy Rooms brand colors (Charcoal #111111, Gold #a48b65, Crisp White #ffffff).
 */
export function buildUserConfirmationEmail(data: ContactSubmission) {
  const firstName = data.first_name ? data.first_name.trim() : "Valued Practitioner";
  const fullName = [data.first_name, data.last_name].filter(Boolean).join(" ").trim() || firstName;
  const roomText = data.room ? ` (${data.room})` : "";

  const subject = `London Therapy Rooms to Rent Enquiry - ${fullName}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f5f7; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.04);">
          
          <!-- Top Navigation Header -->
          <tr>
            <td style="background-color: #111111; padding: 14px 24px; border-bottom: 2px solid #a48b65;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="left" style="font-size: 12px; font-weight: 500; letter-spacing: 0.05em;">
                    <a href="${SITE_URL}/" style="color: #ffffff; text-decoration: none; margin-right: 14px;">Home</a>
                    <a href="${SITE_URL}/#Rooms" style="color: #d1be9f; text-decoration: none; margin-right: 14px;">Rooms &amp; Rates</a>
                    <a href="${SITE_URL}/#Aboutus" style="color: #ffffff; text-decoration: none; margin-right: 14px;">About Us</a>
                    <a href="${SITE_URL}/#PRACTITIONERS" style="color: #ffffff; text-decoration: none; margin-right: 14px;">Practitioners</a>
                    <a href="${SITE_URL}/#Contact" style="color: #a48b65; text-decoration: none; font-weight: 600;">Contact</a>
                  </td>
                  <td align="right">
                    <a href="${FB_URL}" style="color: #ffffff; text-decoration: none; margin-left: 8px; font-size: 11px;">FB</a>
                    <a href="${IG_URL}" style="color: #a48b65; text-decoration: none; margin-left: 8px; font-size: 11px;">IG</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Clinic Logo Banner -->
          <tr>
            <td align="center" style="padding: 28px 24px 20px; background-color: #0c0c0c; border-bottom: 1px solid #222222;">
              <a href="${SITE_URL}/" style="text-decoration: none; display: inline-block;">
                <img src="${LOGO_URL}" alt="London Therapy Rooms to Rent" width="220" style="display: block; max-width: 220px; height: auto; border: 0;" />
              </a>
              <p style="margin: 8px 0 0; color: #a48b65; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;">Harley Street District · 2 Wimpole Street W1G 0EB</p>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 32px 32px 24px; font-size: 15px; color: #334155; line-height: 1.65;">
              <p style="margin: 0 0 16px; font-size: 16px; font-weight: 600; color: #0f172a;">Dear ${firstName},</p>
              
              <p style="margin: 0 0 16px; font-size: 16px; font-weight: 500; color: #a48b65;">Welcome to London Therapy Rooms to Rent.</p>

              <p style="margin: 0 0 16px;">
                Thank you for requesting information regarding our consulting and therapy rooms${roomText} at <strong>London Therapy Rooms to Rent</strong> (Health &amp; Skin Clinic). We appreciate you selecting us as a trusted space to advise, practice, and help you and your clients.
              </p>

              <p style="margin: 0 0 16px;">
                One of our team members will be in contact shortly to collect a bit more information, discuss availability, and schedule an in-person clinic tour or consultation. In the meantime, please feel free to have a look at our <a href="${SITE_URL}/#Rooms" style="color: #a48b65; font-weight: 600; text-decoration: underline;">image gallery</a> to see our treatment suites and facilities or browse through our practitioners and client <a href="${SITE_URL}/#PRACTITIONERS" style="color: #a48b65; font-weight: 600; text-decoration: underline;">reviews</a>.
              </p>

              <p style="margin: 0 0 20px;">
                If your room hire request is regarding a promotion or ongoing block booking, please remember to mention this when we speak.
              </p>

              <!-- Payment / Booking Notice Box (styled in clean brand colors) -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 20px 0; background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #a48b65; border-radius: 4px;">
                <tr>
                  <td style="padding: 14px 16px; font-size: 13.5px; color: #475569; line-height: 1.6;">
                    <strong style="color: #0f172a;">Please note:</strong> We are not able to take payment via email. We understand that it might not always be possible for you to answer the phone so, if there&rsquo;s a particular day or time that would be best for us to give you a call, simply let us know by replying directly to this email or contacting us at:
                    <br/><br/>
                    📧 <a href="mailto:${CLINIC_EMAIL}" style="color: #a48b65; font-weight: 600; text-decoration: underline;">${CLINIC_EMAIL}</a><br/>
                    📞 <strong>Direct:</strong> ${CLINIC_MOBILE} &nbsp;|&nbsp; <strong>Clinic Tel:</strong> ${CLINIC_LANDLINE}
                  </td>
                </tr>
              </table>

              <!-- Sign-off -->
              <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
                <p style="margin: 0 0 4px; font-size: 14px; color: #64748b;">Yours Sincerely,</p>
                <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #0f172a;">London Therapy Rooms to Rent</p>
                <p style="margin: 0; font-size: 13px; color: #475569;">Health &amp; Skin Clinic · 2 Wimpole Street, Marylebone, London W1G 0EB</p>
                <p style="margin: 4px 0 0; font-size: 12px; color: #64748b;">
                  <a href="${SITE_URL}" style="color: #a48b65; text-decoration: none;">londontherapyroomstorent.com</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #f8fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b;">
              <p style="margin: 0 0 6px;">London Therapy Rooms to Rent · 2 Wimpole Street, Marylebone, London W1G 0EB</p>
              <p style="margin: 0;">
                <a href="${SITE_URL}/#Rooms" style="color: #475569; text-decoration: underline; margin: 0 6px;">Suites</a>·
                <a href="${SITE_URL}/#Aboutus" style="color: #475569; text-decoration: underline; margin: 0 6px;">About Us</a>·
                <a href="${SITE_URL}/privacy" style="color: #475569; text-decoration: underline; margin: 0 6px;">Privacy Policy</a>·
                <a href="${SITE_URL}/terms" style="color: #475569; text-decoration: underline; margin: 0 6px;">Terms</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
Dear ${firstName},

Welcome to London Therapy Rooms to Rent.

Thank you for requesting information regarding our consulting and therapy rooms${roomText} at London Therapy Rooms to Rent (Health & Skin Clinic). We appreciate you selecting us as a trusted space to advise, practice, and help you and your clients.

One of our team members will be in contact shortly to collect a bit more information, discuss availability, and schedule an in-person clinic tour or consultation. In the meantime, please feel free to have a look at our image gallery (${SITE_URL}/#Rooms) to see our treatment suites and facilities or browse through our practitioners and client reviews (${SITE_URL}/#PRACTITIONERS).

If your room hire request is regarding a promotion or ongoing block booking, please remember to mention this when we speak.

Please note: We are not able to take payment via email. We understand that it might not always be possible for you to answer the phone so, if there's a particular day or time that would be best for us to give you a call, simply let us know by replying directly to this email or contacting us at:
Email: ${CLINIC_EMAIL}
Phone: ${CLINIC_LANDLINE} | Mobile: ${CLINIC_MOBILE}

Yours Sincerely,
London Therapy Rooms to Rent
Health & Skin Clinic
2 Wimpole Street, Marylebone, London W1G 0EB
${SITE_URL}
  `.trim();

  return { subject, html, text };
}

/**
 * Builds the notification email sent to the clinic administrator (info@... & cc: Sofiabouzi@...).
 * Styled in London Therapy Rooms' real luxury brand colors (Charcoal #111111, Gold #a48b65, Clean White #ffffff)
 * replacing any cheap yellow backgrounds with modern, crisp executive styling.
 * All embedded links verified 200 OK.
 */
export function buildAdminNotificationEmail(
  data: ContactSubmission,
  meta: SubmissionMetadata = {}
) {
  const name = [data.first_name, data.last_name].filter(Boolean).join(" ").trim() || "New Client";
  const room = data.room || "Not specified";
  const now = new Date();
  const formattedTimestamp = meta.timestamp || now.toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  });
  const pageUrl = meta.pageUrl || `${SITE_URL}/`;
  const referrer = meta.referrer || "Direct / None";
  const ip = meta.ip || "Unknown IP";

  const userConf = buildUserConfirmationEmail(data);

  const subject = `London Therapy Rooms to Rent Enquiry - ${name}`;

  // Clean phone number for tel: and WhatsApp
  const rawPhone = data.phone ? data.phone.replace(/[^0-9+]/g, "") : "";
  const whatsappUrl = rawPhone ? `https://wa.me/${rawPhone.startsWith("0") ? "44" + rawPhone.slice(1) : rawPhone.replace("+", "")}` : "";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 20px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; color: #1e293b; line-height: 1.6;">
  <div style="max-width: 680px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
    
    <!-- Luxury Dark Header with Logo & Brand Gold Line -->
    <div style="background-color: #111111; padding: 22px 24px; border-bottom: 3px solid #a48b65;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td align="left" style="vertical-align: middle;">
            <a href="${SITE_URL}/" style="text-decoration: none; display: inline-block;">
              <img src="${LOGO_URL}" alt="London Therapy Rooms to Rent" width="180" style="display: block; max-width: 180px; height: auto; border: 0;" />
            </a>
          </td>
          <td align="right" style="vertical-align: middle;">
            <div style="display: inline-block; padding: 4px 12px; background-color: rgba(164, 139, 101, 0.15); border: 1px solid #a48b65; border-radius: 4px; color: #d1be9f; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">
              New Website Enquiry
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Main Content Container -->
    <div style="padding: 24px 28px;">
      
      <!-- Notification Title -->
      <div style="margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0;">
        <h2 style="margin: 0 0 6px; color: #0f172a; font-size: 20px; font-weight: 600;">
          New Clinic Enquiry Received
        </h2>
        <p style="margin: 0; font-size: 13px; color: #64748b;">
          Submitted on <strong>${formattedTimestamp}</strong> from <a href="${pageUrl}" style="color: #a48b65; text-decoration: none; font-weight: 500;">${pageUrl}</a>
        </p>
      </div>

      <!-- Quick Action Buttons for Sofia / Admin -->
      <div style="margin-bottom: 24px; padding: 14px 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
        <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 10px;">Quick Actions:</span>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <a href="mailto:${data.email}?subject=RE: London Therapy Rooms to Rent Enquiry" style="display: inline-block; background-color: #111111; color: #ffffff; padding: 7px 14px; border-radius: 4px; font-size: 12px; font-weight: 500; text-decoration: none; margin-right: 8px; margin-bottom: 6px;">
            ✉️ Reply via Email
          </a>
          ${data.phone ? `
          <a href="tel:${rawPhone}" style="display: inline-block; background-color: #a48b65; color: #ffffff; padding: 7px 14px; border-radius: 4px; font-size: 12px; font-weight: 500; text-decoration: none; margin-right: 8px; margin-bottom: 6px;">
            📞 Call ${data.phone}
          </a>
          ` : ""}
          ${whatsappUrl ? `
          <a href="${whatsappUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 7px 14px; border-radius: 4px; font-size: 12px; font-weight: 500; text-decoration: none; margin-right: 8px; margin-bottom: 6px;">
            💬 WhatsApp
          </a>
          ` : ""}
          <a href="${SITE_URL}/#Rooms" target="_blank" style="display: inline-block; background-color: #ffffff; color: #475569; border: 1px solid #cbd5e1; padding: 7px 14px; border-radius: 4px; font-size: 12px; font-weight: 500; text-decoration: none; margin-bottom: 6px;">
            🏢 View Suites
          </a>
        </div>
      </div>

      <!-- Structured Enquiry Table (Clean, Professional Brand Colors) -->
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; width: 170px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155;">Client Name:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600; font-size: 15px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155;">Email Address:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0;">
            <a href="mailto:${data.email}" style="color: #a48b65; font-weight: 600; text-decoration: underline;">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155;">Telephone Number:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0;">
            ${data.phone ? `<a href="tel:${rawPhone}" style="color: #a48b65; font-weight: 600; text-decoration: underline;">${data.phone}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155;">Profession / Specialty:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${data.profession || '<span style="color: #94a3b8;">Not specified</span>'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155;">Interested Room:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0;">
            <span style="display: inline-block; padding: 2px 10px; background-color: #fbf9f5; border: 1px solid #a48b65; border-radius: 12px; color: #a48b65; font-weight: 600; font-size: 13px;">
              ${room}
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155;">Where did you hear about us:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">
            ${data.heard_about || '<span style="color: #94a3b8;">Not specified</span>'}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155; vertical-align: top;">Enquiry Details:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #1e293b; white-space: pre-wrap; line-height: 1.6; background-color: #ffffff;">${data.message || '<span style="color: #94a3b8;">No additional message</span>'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155;">Page URL:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 12px;">
            <a href="${pageUrl}" style="color: #a48b65; text-decoration: underline;">${pageUrl}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #334155;">Referrer:</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">${referrer}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; background-color: #f8fafc; color: #334155;">Sender IP:</td>
          <td style="padding: 10px 14px; font-size: 12px; color: #64748b;">${ip}</td>
        </tr>
      </table>

      <!-- Copy of User Confirmation (Clean Card, Zero Yellow) -->
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #a48b65; border-radius: 6px; padding: 18px; margin-top: 24px;">
        <p style="margin: 0 0 10px; font-size: 13px; font-weight: 600; color: #0f172a;">
          Automatic confirmation delivered to client (<a href="mailto:${data.email}" style="color: #a48b65; text-decoration: underline;">${data.email}</a>):
        </p>
        <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 14px; font-size: 12.5px; color: #475569; max-height: 220px; overflow-y: auto; line-height: 1.6;">
          <pre style="white-space: pre-wrap; font-family: inherit; margin: 0; font-size: 12.5px;">${userConf.text}</pre>
        </div>
      </div>

    </div>

    <!-- Luxury Clinic Footer with Canonical 200 Links -->
    <div style="background-color: #f8fafc; padding: 18px 24px; border-top: 1px solid #e2e8f0; font-size: 11.5px; color: #64748b; text-align: center;">
      <p style="margin: 0 0 4px; font-weight: 600; color: #0f172a;">London Therapy Rooms to Rent · Health &amp; Skin Clinic</p>
      <p style="margin: 0 0 8px; color: #64748b;">2 Wimpole Street, Marylebone, London W1G 0EB · Landline: ${CLINIC_LANDLINE} · Mobile: ${CLINIC_MOBILE}</p>
      <p style="margin: 0;">
        <a href="${SITE_URL}/" style="color: #475569; text-decoration: underline; margin: 0 6px;">Home</a>·
        <a href="${SITE_URL}/#Rooms" style="color: #475569; text-decoration: underline; margin: 0 6px;">Rooms &amp; Rates</a>·
        <a href="${SITE_URL}/#Aboutus" style="color: #475569; text-decoration: underline; margin: 0 6px;">About Us</a>·
        <a href="${SITE_URL}/#PRACTITIONERS" style="color: #475569; text-decoration: underline; margin: 0 6px;">Practitioners</a>·
        <a href="${SITE_URL}/#Contact" style="color: #475569; text-decoration: underline; margin: 0 6px;">Contact</a>·
        <a href="${SITE_URL}/privacy" style="color: #475569; text-decoration: underline; margin: 0 6px;">Privacy</a>·
        <a href="${SITE_URL}/terms" style="color: #475569; text-decoration: underline; margin: 0 6px;">Terms</a>
      </p>
    </div>

  </div>
</body>
</html>
  `.trim();

  const text = `
============================================================
NEW CLINIC ENQUIRY - LONDON THERAPY ROOMS TO RENT
============================================================
Date/Time: ${formattedTimestamp}
Page URL:  ${pageUrl}

CLIENT DETAILS:
- Name:        ${name}
- Email:       ${data.email}
- Phone:       ${data.phone || "Not provided"}
- Profession:  ${data.profession || "Not specified"}
- Room:        ${room}
- Heard About: ${data.heard_about || "Not specified"}
- Message:
${data.message || "(No additional message provided)"}

METADATA:
- Referrer:    ${referrer}
- Client IP:   ${ip}

------------------------------------------------------------
AUTOMATIC CONFIRMATION MESSAGE DELIVERED TO CLIENT (${data.email}):
------------------------------------------------------------
${userConf.text}

============================================================
London Therapy Rooms to Rent · Health & Skin Clinic
2 Wimpole Street, Marylebone, London W1G 0EB
Tel: ${CLINIC_LANDLINE} | Mobile: ${CLINIC_MOBILE}
${SITE_URL}
============================================================
  `.trim();

  return { subject, html, text };
}
