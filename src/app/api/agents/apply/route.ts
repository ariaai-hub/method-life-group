import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      state,
      licensedStates,
      linesOfAuthority,
      yearsLicensed,
      currentAgency,
      currentCarriers,
      annualPremium,
      whyLeft,
      whatLookingFor,
      howDidYouHear,
    } = body;

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: Store in database via Prisma
    // TODO: Push to GHL via webhook
    // TODO: Send confirmation email via Resend

    // Placeholder: log the submission
    console.log("New agent application:", {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      state,
      licensedStates,
      linesOfAuthority,
      yearsLicensed,
      currentAgency,
      currentCarriers,
      annualPremium,
      segment: yearsLicensed === "new" ? "new" : "established",
      source: howDidYouHear,
      whyLeft,
      whatLookingFor,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Application received." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Agent application error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
