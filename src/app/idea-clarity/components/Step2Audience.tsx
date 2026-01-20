"use client";

import React from "react";
import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
  FieldErrors,
} from "react-hook-form";
import { Users, Target, Globe, Building, User } from "lucide-react";
import type { IdeaClarityFormData } from "@/lib/validation/idea-clarity";

interface Step2Props {
  register: UseFormRegister<IdeaClarityFormData>;
  watch: UseFormWatch<IdeaClarityFormData>;
  setValue: UseFormSetValue<IdeaClarityFormData>;
  errors: FieldErrors<IdeaClarityFormData>;
}

const Step2Audience: React.FC<Step2Props> = ({
  register,
  watch,
  setValue,
  errors,
}) => {
  const targetAudienceOptions = [
    {
      id: "consumers",
      label: "General Consumers",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: "businesses",
      label: "Businesses",
      icon: <Building className="h-4 w-4" />,
    },
    {
      id: "developers",
      label: "Developers",
      icon: <User className="h-4 w-4" />,
    },
    { id: "students", label: "Students", icon: <Users className="h-4 w-4" /> },
    {
      id: "enterprises",
      label: "Enterprises",
      icon: <Building className="h-4 w-4" />,
    },
    {
      id: "specific-niche",
      label: "Specific Niche",
      icon: <Target className="h-4 w-4" />,
    },
  ];

  const audienceSizeOptions = [
    {
      id: "small",
      label: "Small (1-100 users)",
      description: "Internal tool or small community",
    },
    {
      id: "medium",
      label: "Medium (100-1k users)",
      description: "Growing user base",
    },
    {
      id: "large",
      label: "Large (1k-10k users)",
      description: "Public product with traction",
    },
    {
      id: "enterprise",
      label: "Enterprise (10k+ users)",
      description: "Mass-scale platform",
    },
  ];

  const userNeedsOptions = [
    "Ease of use",
    "Speed & Performance",
    "Security & Privacy",
    "Cost-effectiveness",
    "Scalability",
    "Mobile Accessibility",
    "24/7 Availability",
    "Integration with other tools",
    "Customization options",
    "Analytics & Reporting",
  ];

  const toggleAudience = (audienceId: string) => {
    const currentAudience = watch("targetAudience") || [];
    if (currentAudience.includes(audienceId)) {
      setValue(
        "targetAudience",
        currentAudience.filter((id) => id !== audienceId),
      );
    } else {
      setValue("targetAudience", [...currentAudience, audienceId]);
    }
  };

  const toggleUserNeed = (need: string) => {
    const currentNeeds = watch("userNeeds") || [];
    if (currentNeeds.includes(need)) {
      setValue(
        "userNeeds",
        currentNeeds.filter((n) => n !== need),
      );
    } else {
      setValue("userNeeds", [...currentNeeds, need]);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2">Target Audience</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Who will use your product? Understanding your users is key to success.
        </p>
      </div>

      {/* Target Audience */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Who is your target audience? *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {targetAudienceOptions.map((audience) => (
            <button
              key={audience.id}
              type="button"
              onClick={() => toggleAudience(audience.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                (watch("targetAudience") || []).includes(audience.id)
                  ? "border-blue-500 bg-blue-50 -900/20"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    (watch("targetAudience") || []).includes(audience.id)
                      ? "bg-blue-100 -900/30 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {audience.icon}
                </div>
                <span className="font-medium">{audience.label}</span>
              </div>
            </button>
          ))}
        </div>
        {errors.targetAudience && (
          <p className="mt-2 text-sm text-red-600">
            {errors.targetAudience.message}
          </p>
        )}
      </div>

      {/* Audience Size */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Expected audience size *
        </label>
        <div className="space-y-3">
          {audienceSizeOptions.map((size) => (
            <button
              key={size.id}
              type="button"
              onClick={() => setValue("audienceSize", size.id as any)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                watch("audienceSize") === size.id
                  ? "border-blue-500 bg-blue-50 -900/20"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">{size.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {size.description}
                  </div>
                </div>
                {watch("audienceSize") === size.id && (
                  <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* User Needs */}
      <div>
        <label className="block text-sm font-medium mb-3">
          What are your users' primary needs? *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {userNeedsOptions.map((need) => (
            <button
              key={need}
              type="button"
              onClick={() => toggleUserNeed(need)}
              className={`p-3 rounded-lg border text-left transition-all ${
                (watch("userNeeds") || []).includes(need)
                  ? "border-blue-500 bg-blue-50 -900/20"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`h-4 w-4 rounded border flex items-center justify-center ${
                    (watch("userNeeds") || []).includes(need)
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-400"
                  }`}
                >
                  {(watch("userNeeds") || []).includes(need) && (
                    <div className="h-2 w-2 rounded-sm bg-white" />
                  )}
                </div>
                <span>{need}</span>
              </div>
            </button>
          ))}
        </div>
        {errors.userNeeds && (
          <p className="mt-2 text-sm text-red-600">
            {errors.userNeeds.message}
          </p>
        )}
      </div>

      {/* Additional Audience Info */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Additional audience insights (optional)
        </label>
        <textarea
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Any specific demographic information, geographic locations, or behavioral patterns..."
          rows={3}
          onChange={(e) => {
            // Optional field, not in schema
            // You can store this in form state if needed
          }}
        />
      </div>
    </div>
  );
};

export default Step2Audience;
