import { IdeaClarityFormData } from "@/lib/validation/idea-clarity";
import { ProjectBlueprint } from "@/types/idea-clarity";

export async function generateBlueprint(
  formData: IdeaClarityFormData,
): Promise<ProjectBlueprint> {
  // Calculate readiness score (0-100)
  const readinessScore = calculateReadinessScore(formData);

  // Generate recommended tech stack based on project type
  const recommendedStack = getRecommendedStack(formData);

  // Create development phases
  const phases = generatePhases(formData);

  // Identify risks
  const risks = identifyRisks(formData);

  // Define success metrics
  const successMetrics = generateSuccessMetrics(formData);

  // Determine next steps
  const nextSteps = generateNextSteps(formData, readinessScore);

  // Create project summary
  const summary = generateProjectSummary(formData);

  return {
    id: Date.now().toString(),
    formData,
    summary,
    recommendedStack,
    phases,
    risks,
    successMetrics,
    nextSteps,
    readinessScore,
    generatedAt: new Date().toISOString(),
  };
}

function calculateReadinessScore(formData: IdeaClarityFormData): number {
  let score = 0;

  // Problem clarity (max 20 points)
  if (formData.problemStatement.length > 100) score += 20;
  else if (formData.problemStatement.length > 50) score += 15;
  else if (formData.problemStatement.length > 20) score += 10;

  // Solution clarity (max 20 points)
  if (formData.solutionIdea.length > 50) score += 20;
  else if (formData.solutionIdea.length > 30) score += 15;
  else if (formData.solutionIdea.length > 10) score += 10;

  // Feature definition (max 20 points)
  score += Math.min(formData.mustHaveFeatures.length * 5, 20);

  // Budget realism (max 20 points)
  const budgetScore =
    {
      "$1k-$5k": 10,
      "$5k-$10k": 15,
      "$10k-$25k": 18,
      "$25k-$50k": 20,
      "$50k+": 20,
    }[formData.budgetRange] || 10;
  score += budgetScore;

  // Team availability (max 20 points)
  if (formData.hasTeam && (formData.teamSize || 0) > 1) score += 20;
  else if (formData.hasTeam) score += 10;

  return Math.min(score, 100);
}

function getRecommendedStack(formData: IdeaClarityFormData) {
  const baseStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "PostgreSQL"],
    database: ["PostgreSQL", "Redis"],
    infrastructure: ["Vercel", "AWS", "Docker"],
    tools: ["Git", "GitHub", "Figma", "VS Code"],
  };

  // Customize based on project type
  switch (formData.projectType) {
    case "mobile-app":
      baseStack.frontend = ["React Native", "TypeScript", "Expo"];
      baseStack.backend = ["Node.js", "Firebase"];
      break;
    case "saas-platform":
      baseStack.backend = ["Node.js", "PostgreSQL", "Redis", "Stripe"];
      baseStack.infrastructure = ["AWS", "Docker", "Kubernetes"];
      break;
    case "ecommerce":
      baseStack.backend = ["Next.js", "Stripe", "PostgreSQL"];
      baseStack.database = ["PostgreSQL", "Redis", "CDN"];
      break;
    case "api-backend":
      baseStack.frontend = []; // No frontend needed
      baseStack.backend = [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "Swagger",
      ];
      break;
  }

  return baseStack;
}

function generatePhases(formData: IdeaClarityFormData) {
  const phases = [];

  // Phase 1: Discovery & Planning
  phases.push({
    name: "Discovery & Planning",
    timeline: "1-2 weeks",
    deliverables: [
      "Project Requirements Document",
      "Technical Specification",
      "Wireframes & Prototypes",
      "Project Timeline",
    ],
    estimatedCost: "$1k-$2k",
  });

  // Phase 2: MVP Development
  if (formData.mustHaveFeatures.length > 0) {
    const mvpWeeks = Math.ceil(formData.mustHaveFeatures.length / 2);
    phases.push({
      name: "MVP Development",
      timeline: `${mvpWeeks}-${mvpWeeks + 2} weeks`,
      deliverables: [
        "Core Features Implementation",
        "Database Design",
        "Basic UI/UX",
        "Testing & QA",
      ],
      estimatedCost: calculatePhaseCost(formData.budgetRange, 0.4),
    });
  }

  // Phase 3: Additional Features
  if (formData.niceToHaveFeatures && formData.niceToHaveFeatures.length > 0) {
    phases.push({
      name: "Additional Features",
      timeline: "2-4 weeks",
      deliverables: [
        "Secondary Features",
        "Performance Optimization",
        "Advanced UI/UX",
        "Integration Testing",
      ],
      estimatedCost: calculatePhaseCost(formData.budgetRange, 0.3),
    });
  }

  // Phase 4: Launch & Maintenance
  phases.push({
    name: "Launch & Maintenance",
    timeline: "1-2 weeks",
    deliverables: [
      "Production Deployment",
      "Documentation",
      "Training & Handover",
      "30-day Support",
    ],
    estimatedCost: calculatePhaseCost(formData.budgetRange, 0.1),
  });

  return phases;
}

function calculatePhaseCost(
  budgetRange: "$1k-$5k" | "$5k-$10k" | "$10k-$25k" | "$25k-$50k" | "$50k+",
  percentage: number,
): string {
  const ranges = {
    "$1k-$5k": { min: 1000, max: 5000 },
    "$5k-$10k": { min: 5000, max: 10000 },
    "$10k-$25k": { min: 10000, max: 25000 },
    "$25k-$50k": { min: 25000, max: 50000 },
    "$50k+": { min: 50000, max: 100000 },
  };

  const range = ranges[budgetRange] || ranges["$5k-$10k"];
  const minCost = Math.floor(range.min * percentage);
  const maxCost = Math.floor(range.max * percentage);

  return `$${minCost}-$${maxCost}`;
}
function identifyRisks(formData: IdeaClarityFormData) {
  const risks = [];

  // Technical risks
  if (formData.scalabilityNeeds === "enterprise") {
    risks.push({
      type: "technical" as const,
      description:
        "High scalability requirements may need advanced architecture",
      mitigation:
        "Start with scalable patterns from day one, use microservices if needed",
    });
  }

  if (formData.complianceNeeds && formData.complianceNeeds.length > 0) {
    risks.push({
      type: "technical" as const,
      description: "Compliance requirements add complexity",
      mitigation:
        "Involve compliance experts early, use compliant hosting providers",
    });
  }

  // Business risks
  if (formData.audienceSize === "small") {
    risks.push({
      type: "business" as const,
      description: "Small target audience may limit growth potential",
      mitigation: "Focus on niche market, plan for expansion features",
    });
  }

  // Timeline risks
  if (
    formData.timeline === "1-2 months" &&
    formData.mustHaveFeatures.length > 5
  ) {
    risks.push({
      type: "timeline" as const,
      description: "Aggressive timeline with many features",
      mitigation: "Prioritize MVP features, consider phased delivery",
    });
  }

  // Budget risks
  if (
    formData.budgetRange === "$1k-$5k" &&
    formData.mustHaveFeatures.length > 3
  ) {
    risks.push({
      type: "budget" as const,
      description: "Limited budget for the scope",
      mitigation: "Focus on core functionality, consider open-source solutions",
    });
  }

  return risks;
}

function generateSuccessMetrics(formData: IdeaClarityFormData) {
  const metrics = [];

  if (
    formData.projectType === "saas-platform" ||
    formData.projectType === "web-app"
  ) {
    metrics.push("User engagement (daily active users)");
    metrics.push("Feature adoption rate");
    metrics.push("System uptime (>99.5%)");
  }

  if (formData.projectType === "ecommerce") {
    metrics.push("Conversion rate");
    metrics.push("Average order value");
    metrics.push("Cart abandonment rate");
  }

  if (formData.projectType === "mobile-app") {
    metrics.push("App store rating (target: 4.5+)");
    metrics.push("Retention rate");
    metrics.push("Crash-free sessions (>99%)");
  }

  metrics.push("Performance scores (Lighthouse >90)");
  metrics.push("Development velocity");
  metrics.push("Client satisfaction score");

  return metrics;
}

function generateNextSteps(
  formData: IdeaClarityFormData,
  readinessScore: number,
) {
  const nextSteps = [];

  nextSteps.push({
    action: "Review detailed blueprint",
    timeline: "Now",
    priority: "high" as const,
  });

  if (readinessScore >= 70) {
    nextSteps.push({
      action: "Schedule technical deep dive",
      timeline: "Within 1 week",
      priority: "high" as const,
    });
  } else {
    nextSteps.push({
      action: "Refine project requirements",
      timeline: "Within 2 weeks",
      priority: "medium" as const,
    });
  }

  nextSteps.push({
    action: "Create detailed wireframes",
    timeline: "2-3 weeks",
    priority: "medium" as const,
  });

  if (formData.hasTeam) {
    nextSteps.push({
      action: "Team onboarding & setup",
      timeline: "3-4 weeks",
      priority: "medium" as const,
    });
  }

  return nextSteps;
}

function generateProjectSummary(formData: IdeaClarityFormData): string {
  return `A ${formData.projectType.replace(
    "-",
    " ",
  )} solution that addresses ${formData.problemStatement.substring(
    0,
    100,
  )}... by providing ${formData.solutionIdea.substring(
    0,
    100,
  )}... Designed for ${formData.audienceSize} audience with ${
    formData.mustHaveFeatures.length
  } core features.`;
}
