import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, requirementType, budget, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { error: "Please provide a valid contact number." },
        { status: 400 }
      );
    }

    // Email is optional or validated if provided
    if (email && typeof email === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production, integrate here:
    // Option 1: Send email via Resend / SendGrid / Nodemailer
    // await resend.emails.send({ from: '...', to: 'pranavbansal.estates@gmail.com', ... });
    //
    // Option 2: Post to Google Sheets App Script webhook or Airtable
    // await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(leadData) });
    //
    // Option 3: Send instant WhatsApp notification via WhatsApp Business API / Twilio
    
    const leadData = {
      receivedAt: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : "Not provided",
      requirementType: requirementType || "General Consultation",
      budget: budget || "Not specified",
      message: message ? message.trim() : "",
      leadSource: "Pranav Bansal Website Contact Form",
      assignedTo: "Pranav Bansal (9988885889)",
    };

    console.log("New Real Estate Consultation Lead Received:", leadData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out. Pranav Bansal will review your inquiry and contact you shortly.",
        leadId: `PB-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your consultation request. Please try calling directly." },
      { status: 500 }
    );
  }
}

