"use client";

import React, { useState } from "react";
import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
  FieldErrors,
} from "react-hook-form";
import {
  Plus,
  X,
  Zap,
  Shield,
  Bell,
  CreditCard,
  BarChart,
  Users,
  Globe,
  Lock,
  Share2,
} from "lucide-react";
import type { IdeaClarityFormData } from "@/lib/validation/idea-clarity";

interface Step3Props {
  register: UseFormRegister<IdeaClarityFormData>;
  watch: UseFormWatch<IdeaClarityFormData>;
  setValue: UseFormSetValue<IdeaClarityFormData>;
  errors: FieldErrors<IdeaClarityFormData>;
}

const Step3Features: React.FC<Step3Props> = ({ watch, setValue, errors }) => {
  const [newMustHave, setNewMustHave] = useState("");
  const [newNiceToHave, setNewNiceToHave] = useState("");
  const [newIntegration, setNewIntegration] = useState("");

  const commonFeatures = [
    {
      id: "user-auth",
      label: "User Authentication",
      icon: <Lock className="h-4 w-4" />,
    },
    {
      id: "dashboard",
      label: "Admin Dashboard",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell className="h-4 w-4" />,
    },
    {
      id: "payments",
      label: "Payment Processing",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      id: "social-share",
      label: "Social Sharing",
      icon: <Share2 className="h-4 w-4" />,
    },
    {
      id: "multi-language",
      label: "Multi-language",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      id: "user-roles",
      label: "User Roles & Permissions",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: "api-access",
      label: "API Access",
      icon: <Zap className="h-4 w-4" />,
    },
  ];

  const commonIntegrations = [
    "Google Analytics",
    "Stripe / PayPal",
    "SendGrid / Mailchimp",
    "Google Maps",
    "Social Media APIs",
    "AWS Services",
    "Slack / Discord",
    "Google Calendar",
    "Zoom / Google Meet",
  ];

  const addMustHaveFeature = () => {
    if (newMustHave.trim()) {
      const currentFeatures = watch("mustHaveFeatures") || [];
      setValue("mustHaveFeatures", [...currentFeatures, newMustHave.trim()]);
      setNewMustHave("");
    }
  };

  const addNiceToHaveFeature = () => {
    if (newNiceToHave.trim()) {
      const currentFeatures = watch("niceToHaveFeatures") || [];
      setValue("niceToHaveFeatures", [
        ...currentFeatures,
        newNiceToHave.trim(),
      ]);
      setNewNiceToHave("");
    }
  };

  const addIntegration = () => {
    if (newIntegration.trim()) {
      const currentIntegrations = watch("integrations") || [];
      setValue("integrations", [...currentIntegrations, newIntegration.trim()]);
      setNewIntegration("");
    }
  };

  const removeMustHaveFeature = (index: number) => {
    const currentFeatures = watch("mustHaveFeatures") || [];
    setValue(
      "mustHaveFeatures",
      currentFeatures.filter((_, i) => i !== index)
    );
  };

  const removeNiceToHaveFeature = (index: number) => {
    const currentFeatures = watch("niceToHaveFeatures") || [];
    setValue(
      "niceToHaveFeatures",
      currentFeatures.filter((_, i) => i !== index)
    );
  };

  const removeIntegration = (index: number) => {
    const currentIntegrations = watch("integrations") || [];
    setValue(
      "integrations",
      currentIntegrations.filter((_, i) => i !== index)
    );
  };

  const toggleCommonFeature = (feature: { id: string; label: string }) => {
    const currentFeatures = watch("mustHaveFeatures") || [];
    if (currentFeatures.includes(feature.label)) {
      setValue(
        "mustHaveFeatures",
        currentFeatures.filter((f) => f !== feature.label)
      );
    } else {
      setValue("mustHaveFeatures", [...currentFeatures, feature.label]);
    }
  };

  const toggleCommonIntegration = (integration: string) => {
    const currentIntegrations = watch("integrations") || [];
    if (currentIntegrations.includes(integration)) {
      setValue(
        "integrations",
        currentIntegrations.filter((i) => i !== integration)
      );
    } else {
      setValue("integrations", [...currentIntegrations, integration]);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2">Core Features</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Define what your product must do. Focus on core functionality first.
        </p>
      </div>

      {/* Must-Have Features */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium">
            Must-Have Features *
          </label>
          <span className="text-sm text-gray-500">
            {watch("mustHaveFeatures")?.length || 0} features added
          </span>
        </div>

        {/* Common Features */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Common features:
          </p>
          <div className="flex flex-wrap gap-2">
            {commonFeatures.map((feature) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => toggleCommonFeature(feature)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all ${
                  (watch("mustHaveFeatures") || []).includes(feature.label)
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
                    : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                }`}
              >
                {feature.icon}
                <span className="text-sm">{feature.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Add Custom Feature */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newMustHave}
            onChange={(e) => setNewMustHave(e.target.value)}
            placeholder="Add custom must-have feature..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
            onKeyPress={(e) => e.key === "Enter" && addMustHaveFeature()}
          />
          <button
            type="button"
            onClick={addMustHaveFeature}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>

        {/* Added Features */}
        <div className="space-y-2">
          {watch("mustHaveFeatures")?.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
                <span>{feature}</span>
              </div>
              <button
                type="button"
                onClick={() => removeMustHaveFeature(index)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>

        {errors.mustHaveFeatures && (
          <p className="mt-2 text-sm text-red-600">
            {errors.mustHaveFeatures.message}
          </p>
        )}
      </div>

      {/* Nice-to-Have Features */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Nice-to-Have Features (Optional)
        </label>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newNiceToHave}
            onChange={(e) => setNewNiceToHave(e.target.value)}
            placeholder="Add nice-to-have feature..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
            onKeyPress={(e) => e.key === "Enter" && addNiceToHaveFeature()}
          />
          <button
            type="button"
            onClick={addNiceToHaveFeature}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>

        {/* Added Nice-to-Have Features */}
        <div className="space-y-2">
          {watch("niceToHaveFeatures")?.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 text-xs">
                    {index + 1}
                  </span>
                </div>
                <span>{feature}</span>
              </div>
              <button
                type="button"
                onClick={() => removeNiceToHaveFeature(index)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium">
            Third-Party Integrations (Optional)
          </label>
          <span className="text-sm text-gray-500">
            {watch("integrations")?.length || 0} integrations
          </span>
        </div>

        {/* Common Integrations */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Common integrations:
          </p>
          <div className="flex flex-wrap gap-2">
            {commonIntegrations.map((integration) => (
              <button
                key={integration}
                type="button"
                onClick={() => toggleCommonIntegration(integration)}
                className={`px-3 py-2 rounded-lg border text-sm transition-all ${
                  (watch("integrations") || []).includes(integration)
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                    : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                }`}
              >
                {integration}
              </button>
            ))}
          </div>
        </div>

        {/* Add Custom Integration */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newIntegration}
            onChange={(e) => setNewIntegration(e.target.value)}
            placeholder="Add custom integration..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
            onKeyPress={(e) => e.key === "Enter" && addIntegration()}
          />
          <button
            type="button"
            onClick={addIntegration}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>

        {/* Added Integrations */}
        <div className="space-y-2">
          {watch("integrations")?.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Zap className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span>{integration}</span>
              </div>
              <button
                type="button"
                onClick={() => removeIntegration(index)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3Features;
