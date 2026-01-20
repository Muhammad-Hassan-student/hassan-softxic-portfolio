import { z } from "zod";

export const ideaClaritySchema = z
  .object({
    // Step 1: Project Overview
    projectName: z
      .string()
      .min(3, "Project name must be at least 3 characters"),
    projectType: z.enum([
      "web-app",
      "mobile-app",
      "saas-platform",
      "ecommerce",
      "api-backend",
      "mvp",
      "redesign",
    ]),
    email: z.string().email("Please enter a valid email address"),
    problemStatement: z
      .string()
      .min(50, "Please describe the problem in at least 50 characters"),
    solutionIdea: z.string().min(30, "Please describe your solution idea"),

    // Step 2: Target Audience
    targetAudience: z
      .array(z.string())
      .min(1, "Select at least one target audience"),
    audienceSize: z.enum(["small", "medium", "large", "enterprise"]),
    userNeeds: z.array(z.string()).min(1, "Select at least one user need"),

    // Step 3: Core Features
    mustHaveFeatures: z
      .array(z.string())
      .min(1, "Add at least one must-have feature"),
    niceToHaveFeatures: z.array(z.string()).optional(),
    integrations: z.array(z.string()).optional(),

    // Step 4: Technical Requirements
    technicalRequirements: z.array(z.string()).optional(),
    complianceNeeds: z.array(z.string()).optional(),
    scalabilityNeeds: z.enum(["low", "medium", "high", "enterprise"]),

    // Step 5: Budget & Timeline
    performanceExpectations: z.string().optional(),

    budgetRange: z.enum([
      "$1k-$5k",
      "$5k-$10k",
      "$10k-$25k",
      "$25k-$50k",
      "$50k+",
    ]),
    timeline: z.enum(["1-2 months", "3-6 months", "6-12 months", "12+ months"]),
    hasTeam: z.boolean(),
    teamSize: z.number().min(1).max(50).optional(),
    additionalNotes: z.string().max(1000).optional(),
  })
  .refine(
    (data) => {
      // If hasTeam is true, teamSize must be provided
      if (data.hasTeam && !data.teamSize) {
        return false;
      }
      // If hasTeam is false, teamSize should not be provided
      if (!data.hasTeam && data.teamSize) {
        return false;
      }
      return true;
    },
    {
      message: "Team size is required when you have a team",
      path: ["teamSize"],
    },
  );

export type IdeaClarityFormData = z.infer<typeof ideaClaritySchema>;
