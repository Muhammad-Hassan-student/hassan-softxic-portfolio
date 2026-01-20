"use client";

import React from "react";
import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
  FieldErrors,
} from "react-hook-form";
import { Lightbulb, Target, Rocket, Briefcase } from "lucide-react";
import type { IdeaClarityFormData } from "@/lib/validation/idea-clarity";

interface Step1Props {
  register: UseFormRegister<IdeaClarityFormData>;
  watch: UseFormWatch<IdeaClarityFormData>;
  setValue: UseFormSetValue<IdeaClarityFormData>;
  errors: FieldErrors<IdeaClarityFormData>;
}

const Step1Overview: React.FC<Step1Props> = ({
  register,
  watch,
  setValue,
  errors,
}) => {
  const projectTypes = [
    {
      id: "web-app",
      label: "Web Application",
      icon: <Rocket className="h-4 w-4" />,
    },
    {
      id: "mobile-app",
      label: "Mobile App",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      id: "saas-platform",
      label: "SaaS Platform",
      icon: <Target className="h-4 w-4" />,
    },
    {
      id: "ecommerce",
      label: "E-commerce Store",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      id: "api-backend",
      label: "API & Backend",
      icon: <Lightbulb className="h-4 w-4" />,
    },
    {
      id: "mvp",
      label: "MVP Development",
      icon: <Rocket className="h-4 w-4" />,
    },
    {
      id: "redesign",
      label: "Redesign & Revamp",
      icon: <Target className="h-4 w-4" />,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2">Project Overview</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Let's start by understanding your project vision
        </p>
      </div>

      {/* Project Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Project Name *</label>
        <input
          type="text"
          {...register("projectName")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Customer Management System"
        />
        {errors.projectName && (
          <p className="mt-1 text-sm text-red-600">
            {errors.projectName.message}
          </p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label className="block text-sm font-medium mb-3">Project Type *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {projectTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setValue("projectType", type.id as any)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                watch("projectType") === type.id
                  ? "border-blue-500 bg-blue-50 -900/20"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    watch("projectType") === type.id
                      ? "bg-blue-100 -900/30 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {type.icon}
                </div>
                <span className="font-medium">{type.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Problem Statement */}
      <div>
        <label className="block text-sm font-medium mb-2">
          What problem are you solving? *
        </label>
        <textarea
          {...register("problemStatement")}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Describe the problem you want to solve in detail..."
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <div>Minimum 50 characters</div>
          <div
            className={
              watch("problemStatement")?.length < 50
                ? "text-red-500"
                : "text-green-500"
            }
          >
            {watch("problemStatement")?.length || 0} / 50
          </div>
        </div>
        {errors.problemStatement && (
          <p className="mt-1 text-sm text-red-600">
            {errors.problemStatement.message}
          </p>
        )}
      </div>

      {/* Solution Idea */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Your Solution Idea *
        </label>
        <textarea
          {...register("solutionIdea")}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="How will your project solve this problem?..."
        />
        {errors.solutionIdea && (
          <p className="mt-1 text-sm text-red-600">
            {errors.solutionIdea.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Step1Overview;
