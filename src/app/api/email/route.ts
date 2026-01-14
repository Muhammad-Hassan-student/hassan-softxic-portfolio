import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Calculate project readiness score
    const readinessScore = calculateReadinessScore(formData);

    // Send emails
    await sendContactEmail({
      ...formData,
      readinessScore,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      readinessScore,
      nextSteps: getNextSteps(readinessScore),
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function calculateReadinessScore(formData: any): number {
  let score = 0;

  // Budget scoring
  if (formData.budget === "$10k+") score += 30;
  else if (formData.budget === "$5k-$10k") score += 20;
  else if (formData.budget === "$1k-$5k") score += 10;

  // Timeline scoring
  if (formData.timeline === "1-2 months") score += 30;
  else if (formData.timeline === "3-6 months") score += 20;
  else if (formData.timeline === "6+ months") score += 10;

  // Message quality
  if (formData.message.length > 100) score += 20;
  else if (formData.message.length > 50) score += 10;

  return Math.min(score, 100);
}

function getNextSteps(score: number): string {
  if (score >= 70)
    return "Ideal project! Expect a detailed proposal within 24 hours.";
  if (score >= 40)
    return "Good potential. Let's schedule a call to discuss details.";
  return "Needs more clarification. I'll send some questions to better understand your needs.";
}
