export type ProjectType = 
  | 'web-app' 
  | 'mobile-app' 
  | 'saas-platform' 
  | 'ecommerce' 
  | 'api-backend' 
  | 'mvp' 
  | 'redesign';

export type BudgetRange = 
  | '$1k-$5k' 
  | '$5k-$10k' 
  | '$10k-$25k' 
  | '$25k-$50k' 
  | '$50k+';

export type Timeline = 
  | '1-2 months' 
  | '3-6 months' 
  | '6-12 months' 
  | '12+ months';

export interface IdeaClarityFormData {
  // Step 1: Project Overview
  projectName: string;
  projectType: ProjectType;
  problemStatement: string;
  solutionIdea: string;
  
  // Step 2: Target Audience
  targetAudience: string[];
  audienceSize: 'small' | 'medium' | 'large' | 'enterprise';
  userNeeds: string[];
  
  // Step 3: Core Features
  mustHaveFeatures: string[];
  niceToHaveFeatures: string[];
  integrations: string[];
  
  // Step 4: Technical Requirements
  technicalRequirements: string[];
  complianceNeeds: string[];
  scalabilityNeeds: 'low' | 'medium' | 'high' | 'enterprise';
  
  // Step 5: Budget & Timeline
  budgetRange: BudgetRange;
  timeline: Timeline;
  hasTeam: boolean;
  teamSize?: number;
  additionalNotes: string;
}

export interface ProjectBlueprint {
  id: string;
  formData: IdeaClarityFormData;
  summary: string;
  recommendedStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    infrastructure: string[];
    tools: string[];
  };
  phases: Array<{
    name: string;
    timeline: string;
    deliverables: string[];
    estimatedCost: string;
  }>;
  risks: Array<{
    type: 'technical' | 'business' | 'timeline' | 'budget';
    description: string;
    mitigation: string;
  }>;
  successMetrics: string[];
  nextSteps: Array<{
    action: string;
    timeline: string;
    priority: 'high' | 'medium' | 'low';
  }>;
  readinessScore: number;
  generatedAt: string;
}