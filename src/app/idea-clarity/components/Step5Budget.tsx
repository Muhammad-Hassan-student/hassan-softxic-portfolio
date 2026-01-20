"use client";

import React, { useState } from "react";
import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
  FieldErrors,
} from "react-hook-form";
import {
  DollarSign,
  Calendar,
  Users,
  Plus,
  X,
  Calculator,
  TrendingUp,
  Zap,
  Shield,
} from "lucide-react";
import type { IdeaClarityFormData } from "@/lib/validation/idea-clarity";

interface Step5Props {
  register: UseFormRegister<IdeaClarityFormData>;
  watch: UseFormWatch<IdeaClarityFormData>;
  setValue: UseFormSetValue<IdeaClarityFormData>;
  errors: FieldErrors<IdeaClarityFormData>;
}

const Step5Budget: React.FC<Step5Props> = ({
  register,
  watch,
  setValue,
  errors,
}) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [customBudget, setCustomBudget] = useState("");

  const budgetOptions = [
    { id: "$1k-$5k", label: "$1k - $5k", description: "MVP or small project" },
    {
      id: "$5k-$10k",
      label: "$5k - $10k",
      description: "Basic web/mobile app",
    },
    {
      id: "$10k-$25k",
      label: "$10k - $25k",
      description: "Medium complexity project",
    },
    {
      id: "$25k-$50k",
      label: "$25k - $50k",
      description: "Advanced features & scaling",
    },
    { id: "$50k+", label: "$50k+", description: "Enterprise-grade solution" },
  ];

  const timelineOptions = [
    {
      id: "1-2 months",
      label: "1-2 Months",
      description: "Fast delivery, focused scope",
    },
    {
      id: "3-6 months",
      label: "3-6 Months",
      description: "Standard development cycle",
    },
    {
      id: "6-12 months",
      label: "6-12 Months",
      description: "Complex project with iterations",
    },
    {
      id: "12+ months",
      label: "12+ Months",
      description: "Long-term partnership",
    },
  ];

  const teamSizeOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Calculate estimated budget based on features and timeline
  const calculateEstimatedBudget = () => {
    const features = watch("mustHaveFeatures")?.length || 0;
    const niceToHave = watch("niceToHaveFeatures")?.length || 0;
    const timeline = watch("timeline");
    const scalability = watch("scalabilityNeeds");

    let baseCost = features * 2000 + niceToHave * 1000;

    // Adjust for timeline
    if (timeline === "1-2 months") baseCost *= 1.2; // Rush fee
    if (timeline === "6-12 months") baseCost *= 1.1; // Longer projects

    // Adjust for scalability
    if (scalability === "high") baseCost *= 1.3;
    if (scalability === "enterprise") baseCost *= 1.5;

    return Math.round(baseCost);
  };

  const getRecommendedBudgetRange = () => {
    const estimated = calculateEstimatedBudget();

    if (estimated <= 5000) return "$1k-$5k";
    if (estimated <= 10000) return "$5k-$10k";
    if (estimated <= 25000) return "$10k-$25k";
    if (estimated <= 50000) return "$25k-$50k";
    return "$50k+";
  };

  const handleUseRecommendation = () => {
    const recommendedRange = getRecommendedBudgetRange();
    setValue("budgetRange", recommendedRange as any, { shouldValidate: true });
  };

  const addCustomBudget = () => {
    if (customBudget.trim()) {
      // Extract numeric value from custom budget
      const matches = customBudget.match(
        /\$?(\d+[kKmM]?)\s*-?\s*\$?(\d+[kKmM]?)?/i,
      );
      if (matches) {
        setValue("budgetRange", customBudget.trim() as any, {
          shouldValidate: true,
        });
        setCustomBudget("");
      }
    }
  };

  const getBudgetDescription = (budget: string) => {
    const descriptions: Record<string, string> = {
      "$1k-$5k": "Perfect for MVPs, landing pages, or proof-of-concepts",
      "$5k-$10k": "Ideal for small business websites or basic mobile apps",
      "$10k-$25k": "Suitable for SaaS platforms or custom web applications",
      "$25k-$50k": "For complex applications with advanced features",
      "$50k+": "Enterprise solutions, marketplaces, or large-scale platforms",
    };
    return descriptions[budget] || "";
  };

  const getTimelineDescription = (timeline: string) => {
    const descriptions: Record<string, string> = {
      "1-2 months": "Accelerated delivery with focused scope",
      "3-6 months": "Balanced timeline for quality and speed",
      "6-12 months": "Phased delivery with regular iterations",
      "12+ months": "Long-term partnership with ongoing development",
    };
    return descriptions[timeline] || "";
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2">Budget & Timeline</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Set realistic expectations for your project's investment and timeline.
        </p>
      </div>

      {/* Budget Calculator */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <h4 className="text-lg font-bold">Budget Recommendation</h4>
          </div>
          <button
            type="button"
            onClick={() => setShowCalculator(!showCalculator)}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {showCalculator ? "Hide Details" : "Show Details"}
          </button>
        </div>

        {showCalculator && (
          <div className="mb-6 p-4 bg-white dark:bg-gray-900 rounded-xl border border-blue-100 dark:border-blue-900/30">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Factors considered:
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span>
                      Must-have features:{" "}
                      <strong>{watch("mustHaveFeatures")?.length || 0}</strong>
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                    <span>
                      Scalability: <strong>{watch("scalabilityNeeds")}</strong>
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-purple-500" />
                    <span>
                      Compliance needs:{" "}
                      <strong>{watch("complianceNeeds")?.length || 0}</strong>
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span>
                      Timeline: <strong>{watch("timeline")}</strong>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">
                  ${calculateEstimatedBudget().toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Estimated development cost
                </div>
                <button
                  type="button"
                  onClick={handleUseRecommendation}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all text-sm font-medium"
                >
                  Use This Recommendation
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="text-lg font-semibold mb-2">
            Recommended Budget Range:
          </div>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {getRecommendedBudgetRange()}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {getBudgetDescription(getRecommendedBudgetRange())}
          </div>
        </div>
      </div>

      {/* Budget Selection */}
      <div>
        <label className="block text-sm font-medium mb-3">
          What's your budget range? *
        </label>
        <div className="space-y-3 mb-6">
          {budgetOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                setValue("budgetRange", option.id as any, {
                  shouldValidate: true,
                })
              }
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                watch("budgetRange") === option.id
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                        watch("budgetRange") === option.id
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-gray-400"
                      }`}
                    >
                      {watch("budgetRange") === option.id && (
                        <div className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{option.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {option.description}
                      </div>
                    </div>
                  </div>
                </div>
                {watch("budgetRange") === option.id && (
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Custom Budget */}
        <div className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={customBudget}
              onChange={(e) => setCustomBudget(e.target.value)}
              placeholder="Custom budget (e.g., $15k-$20k)"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              onKeyPress={(e) => e.key === "Enter" && addCustomBudget()}
            />
            <button
              type="button"
              onClick={addCustomBudget}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!customBudget.trim()}
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
        {errors.budgetRange && (
          <p className="mt-2 text-sm text-red-600">
            {errors.budgetRange.message}
          </p>
        )}
      </div>

      {/* Timeline Selection */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Expected Timeline *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timelineOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                setValue("timeline", option.id as any, { shouldValidate: true })
              }
              className={`p-6 rounded-xl border-2 text-left transition-all ${
                watch("timeline") === option.id
                  ? "border-blue-500 bg-blue-50 -900/20"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-bold text-lg mb-2">{option.label}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {option.description}
                  </p>
                </div>
                {watch("timeline") === option.id && (
                  <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <Calendar className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        {errors.timeline && (
          <p className="mt-2 text-sm text-red-600">{errors.timeline.message}</p>
        )}
      </div>

      {/* Team Information */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Do you have a development team?
        </label>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            onClick={() => setValue("hasTeam", true, { shouldValidate: true })}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              watch("hasTeam") === true
                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
            }`}
          >
            <div className="font-bold text-lg mb-2">Yes</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              I have an existing team
            </div>
          </button>

          <button
            type="button"
            onClick={() => setValue("hasTeam", false, { shouldValidate: true })}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              watch("hasTeam") === false
                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
            }`}
          >
            <div className="font-bold text-lg mb-2">No</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              I need a team
            </div>
          </button>
        </div>

        {/* Team Size (if has team) */}
        {watch("hasTeam") === true && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Team Size</label>
            <div className="flex flex-wrap gap-2">
              {teamSizeOptions.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() =>
                    setValue("teamSize", size, { shouldValidate: true })
                  }
                  className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                    watch("teamSize") === size
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400"
                      : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                  }`}
                >
                  {size} {size === 1 ? "person" : "people"}
                </button>
              ))}
              <button
                type="button"
                onClick={() =>
                  setValue("teamSize", 11, { shouldValidate: true })
                }
                className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                  watch("teamSize") && (watch("teamSize") ?? 0) > 10
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400"
                    : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                }`}
              >
                10+ people
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          {...register("additionalNotes")}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Any specific requirements, constraints, or additional information about your project..."
        />
        <div className="text-sm text-gray-500 mt-1">
          Maximum 1000 characters. {watch("additionalNotes")?.length || 0}/1000
        </div>
      </div>

      {/* Summary Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800">
        <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
          <Calculator className="h-5 w-5" />
          <span>Project Summary</span>
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Project Type
                </div>
                <div className="font-medium">
                  {watch("projectType")?.replace("-", " ") || "Not specified"}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Core Features
                </div>
                <div className="font-medium">
                  {watch("mustHaveFeatures")?.length || 0} must-have features
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Target Audience
                </div>
                <div className="font-medium">
                  {watch("audienceSize")?.replace("-", " ") || "Not specified"}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Selected Budget
                </div>
                <div className="font-medium text-green-600 dark:text-green-400">
                  {watch("budgetRange") || "Not specified"}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {getBudgetDescription(watch("budgetRange") || "")}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Selected Timeline
                </div>
                <div className="font-medium">
                  {watch("timeline") || "Not specified"}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {getTimelineDescription(watch("timeline") || "")}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Team Status
                </div>
                <div className="font-medium">
                  {watch("hasTeam") === true
                    ? `Yes, ${watch("teamSize") || 0} team member(s)`
                    : watch("hasTeam") === false
                      ? "No team needed"
                      : "Not specified"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5Budget;
