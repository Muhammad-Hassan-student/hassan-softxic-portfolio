"use client";

import React, { useState } from "react";
import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
  FieldErrors,
} from "react-hook-form";
import {
  Server,
  Shield,
  Zap,
  Database,
  Globe,
  Lock,
  Cloud,
  Cpu,
  Plus,
  X,
} from "lucide-react";
import type { IdeaClarityFormData } from "@/lib/validation/idea-clarity";

interface Step4Props {
  register: UseFormRegister<IdeaClarityFormData>;
  watch: UseFormWatch<IdeaClarityFormData>;
  setValue: UseFormSetValue<IdeaClarityFormData>;
  errors: FieldErrors<IdeaClarityFormData>;
}

const Step4Technical: React.FC<Step4Props> = ({ watch, setValue, errors }) => {
  const [newRequirement, setNewRequirement] = useState("");
  const [newCompliance, setNewCompliance] = useState("");

  const scalabilityOptions = [
    {
      id: "low",
      label: "Low",
      description: "Small user base, simple functionality",
      icon: <Server className="h-5 w-5" />,
    },
    {
      id: "medium",
      label: "Medium",
      description: "Growing user base, moderate complexity",
      icon: <Database className="h-5 w-5" />,
    },
    {
      id: "high",
      label: "High",
      description: "Large scale, complex operations",
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      id: "enterprise",
      label: "Enterprise",
      description: "Mission-critical, global scale",
      icon: <Globe className="h-5 w-5" />,
    },
  ];

  const commonRequirements = [
    "Real-time data processing",
    "Offline functionality",
    "Push notifications",
    "File upload & storage",
    "Search functionality",
    "Reporting & analytics",
    "Mobile responsive design",
    "Cross-browser compatibility",
    "API rate limiting",
    "Data backup & recovery",
  ];

  const complianceOptions = [
    "GDPR (Europe)",
    "HIPAA (Healthcare)",
    "PCI DSS (Payments)",
    "SOC 2 (Security)",
    "ISO 27001",
    "CCPA (California)",
    "FERPA (Education)",
    "HIPAA BAA",
  ];

  const addRequirement = () => {
    if (newRequirement.trim()) {
      const currentRequirements = watch("technicalRequirements") || [];
      setValue(
        "technicalRequirements",
        [...currentRequirements, newRequirement.trim()],
        {
          shouldValidate: true,
        }
      );
      setNewRequirement("");
    }
  };

  const addCompliance = () => {
    if (newCompliance.trim()) {
      const currentCompliance = watch("complianceNeeds") || [];
      setValue(
        "complianceNeeds",
        [...currentCompliance, newCompliance.trim()],
        {
          shouldValidate: true,
        }
      );
      setNewCompliance("");
    }
  };

  const removeRequirement = (index: number) => {
    const currentRequirements = watch("technicalRequirements") || [];
    setValue(
      "technicalRequirements",
      currentRequirements.filter((_, i) => i !== index),
      {
        shouldValidate: true,
      }
    );
  };

  const removeCompliance = (index: number) => {
    const currentCompliance = watch("complianceNeeds") || [];
    setValue(
      "complianceNeeds",
      currentCompliance.filter((_, i) => i !== index),
      {
        shouldValidate: true,
      }
    );
  };

  const toggleCommonRequirement = (requirement: string) => {
    const currentRequirements = watch("technicalRequirements") || [];
    if (currentRequirements.includes(requirement)) {
      setValue(
        "technicalRequirements",
        currentRequirements.filter((r) => r !== requirement),
        {
          shouldValidate: true,
        }
      );
    } else {
      setValue("technicalRequirements", [...currentRequirements, requirement], {
        shouldValidate: true,
      });
    }
  };

  const toggleCompliance = (compliance: string) => {
    const currentCompliance = watch("complianceNeeds") || [];
    if (currentCompliance.includes(compliance)) {
      setValue(
        "complianceNeeds",
        currentCompliance.filter((c) => c !== compliance),
        {
          shouldValidate: true,
        }
      );
    } else {
      setValue("complianceNeeds", [...currentCompliance, compliance], {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2">Technical Requirements</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Define your technical needs and constraints for optimal architecture
          planning.
        </p>
      </div>

      {/* Scalability Needs */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Scalability Requirements *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scalabilityOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                setValue("scalabilityNeeds", option.id as any, {
                  shouldValidate: true,
                })
              }
              className={`p-6 rounded-xl border-2 text-left transition-all ${
                watch("scalabilityNeeds") === option.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    watch("scalabilityNeeds") === option.id
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {option.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg mb-2">{option.label}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {option.description}
                  </p>
                </div>
                {watch("scalabilityNeeds") === option.id && (
                  <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        {errors.scalabilityNeeds && (
          <p className="mt-2 text-sm text-red-600">
            {errors.scalabilityNeeds.message}
          </p>
        )}
      </div>

      {/* Technical Requirements */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium">
            Specific Technical Requirements
          </label>
          <span className="text-sm text-gray-500">
            {watch("technicalRequirements")?.length || 0} requirements
          </span>
        </div>

        {/* Common Requirements */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Common requirements:
          </p>
          <div className="flex flex-wrap gap-2">
            {commonRequirements.map((requirement) => (
              <button
                key={requirement}
                type="button"
                onClick={() => toggleCommonRequirement(requirement)}
                className={`px-3 py-2 rounded-lg border text-sm transition-all ${
                  (watch("technicalRequirements") || []).includes(requirement)
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400"
                    : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                }`}
              >
                {requirement}
              </button>
            ))}
          </div>
        </div>

        {/* Add Custom Requirement */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newRequirement}
            onChange={(e) => setNewRequirement(e.target.value)}
            placeholder="Add custom technical requirement..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            onKeyPress={(e) => e.key === "Enter" && addRequirement()}
          />
          <button
            type="button"
            onClick={addRequirement}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!newRequirement.trim()}
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>

        {/* Added Requirements */}
        <div className="space-y-2">
          {watch("technicalRequirements")?.map((requirement, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Zap className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                </div>
                <span>{requirement}</span>
              </div>
              <button
                type="button"
                onClick={() => removeRequirement(index)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
              >
                <X className="h-4 w-4 text-gray-500 hover:text-red-500" />
              </button>
            </div>
          ))}
          {(!watch("technicalRequirements") ||
            watch("technicalRequirements").length === 0) && (
            <div className="text-center py-4 text-gray-500 dark:text-gray-400">
              No technical requirements added yet
            </div>
          )}
        </div>
      </div>

      {/* Compliance Needs */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium">
            Compliance & Regulatory Requirements
          </label>
          <span className="text-sm text-gray-500">
            {watch("complianceNeeds")?.length || 0} compliance needs
          </span>
        </div>

        {/* Common Compliance */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Common compliance standards:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {complianceOptions.map((compliance) => (
              <button
                key={compliance}
                type="button"
                onClick={() => toggleCompliance(compliance)}
                className={`p-3 rounded-lg border text-sm transition-all ${
                  (watch("complianceNeeds") || []).includes(compliance)
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                    : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>{compliance}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Add Custom Compliance */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newCompliance}
            onChange={(e) => setNewCompliance(e.target.value)}
            placeholder="Add custom compliance need..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
            onKeyPress={(e) => e.key === "Enter" && addCompliance()}
          />
          <button
            type="button"
            onClick={addCompliance}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!newCompliance.trim()}
          >
            <Shield className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>

        {/* Added Compliance */}
        <div className="space-y-2">
          {watch("complianceNeeds")?.map((compliance, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <Lock className="h-3 w-3 text-red-600 dark:text-red-400" />
                </div>
                <span>{compliance}</span>
              </div>
              <button
                type="button"
                onClick={() => removeCompliance(index)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
              >
                <X className="h-4 w-4 text-gray-500 hover:text-red-500" />
              </button>
            </div>
          ))}
          {(!watch("complianceNeeds") ||
            watch("complianceNeeds").length === 0) && (
            <div className="text-center py-4 text-gray-500 dark:text-gray-400">
              No compliance needs added yet
            </div>
          )}
        </div>
      </div>

      {/* Performance Expectations */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Performance Expectations (Optional)
        </label>
        <textarea
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none outline-none transition-all"
          placeholder="e.g., Page load time < 2 seconds, API response < 100ms, Support 1000 concurrent users..."
          rows={3}
          value={watch("performanceExpectations") || ""}
          onChange={(e) =>
            setValue("performanceExpectations", e.target.value, {
              shouldValidate: true,
            })
          }
        />
      </div>
    </div>
  );
};

export default Step4Technical;
