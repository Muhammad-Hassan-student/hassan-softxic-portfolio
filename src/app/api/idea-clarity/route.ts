import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { ideaClaritySchema } from "@/lib/validation/idea-clarity";
import { generateBlueprint } from "@/lib/blueprint-generator";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate input
    const validatedData = ideaClaritySchema.parse(formData);

    // Generate unique ID
    const submissionId = uuidv4();

    // Generate blueprint
    const blueprint = await generateBlueprint(validatedData);

    // In production, save to database
    // For now, we'll return the blueprint directly
    const submission = {
      id: submissionId,
      timestamp: new Date().toISOString(),
      formData: validatedData,
      blueprint,
    };

    // Send notification email to admin
    await sendAdminNotification(submission);

    // Send confirmation email to user if email provided
    if (validatedData.email) {
      await sendUserConfirmation(validatedData.email, submissionId, blueprint);
    }

    return NextResponse.json({
      success: true,
      id: submissionId,
      blueprint,
      message: "Blueprint generated successfully",
    });
  } catch (error) {
    console.error("API Error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error.message },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to generate blueprint" },
      { status: 500 },
    );
  }
}

async function sendAdminNotification(submission: any) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) return;

  const emailContent = `
    <h2>New Idea Clarity Submission</h2>
    <p><strong>Project:</strong> ${submission.formData.projectName}</p>
    <p><strong>Type:</strong> ${submission.formData.projectType}</p>
    <p><strong>Submitted:</strong> ${new Date(
      submission.timestamp,
    ).toLocaleString()}</p>
    <p><strong>Readiness Score:</strong> ${
      submission.blueprint.readinessScore
    }/100</p>
    <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/ideas/${
      submission.id
    }">View Submission</a></p>
  `;

  await sendEmail(
    adminEmail,
    `New Idea Submission: ${submission.formData.projectName}`,
    emailContent,
  );
}

async function sendUserConfirmation(
  email: string,
  submissionId: string,
  blueprint: any,
) {
  const emailContent = `
    <h2>Your Project Blueprint is Ready! 🎉</h2>
    <p>Thank you for using our Idea Clarity tool. Your detailed project blueprint has been generated.</p>
    
    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Key Highlights:</h3>
      <ul>
        <li><strong>Readiness Score:</strong> ${
          blueprint.readinessScore
        }/100</li>
        <li><strong>Recommended Tech Stack:</strong> ${
          blueprint.recommendedStack.frontend[0]
        }, ${blueprint.recommendedStack.backend[0]}</li>
        <li><strong>Estimated Timeline:</strong> ${
          blueprint.phases[0]?.timeline || "To be determined"
        }</li>
      </ul>
    </div>
    
    <p>
      <a href="${
        process.env.NEXT_PUBLIC_SITE_URL
      }/idea-clarity/results/${submissionId}" 
         style="display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px;">
        View Complete Blueprint
      </a>
    </p>
    
    <p>Need help implementing your project? <a href="${
      process.env.NEXT_PUBLIC_SITE_URL
    }/booking">Book a free strategy call</a></p>
  `;

  await sendEmail(email, "Your Project Blueprint is Ready!", emailContent);
}
