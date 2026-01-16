"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  ideaClaritySchema,
  type IdeaClarityFormData,
} from "@/lib/validation/idea-clarity";
import Step1Overview from "@/app/idea-clarity/components/Step1Overview";
import Step2Audience from "@/app/idea-clarity/components/Step2Audience";
import Step3Features from "@/app/idea-clarity/components/Step3Features";
import Step4Technical from "@/app/idea-clarity/components/Step4Technical";
import Step5Budget from "@/app/idea-clarity/components/Step5Budget";

const IdeaClarityForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<IdeaClarityFormData>({
    resolver: zodResolver(ideaClaritySchema),
    defaultValues: {
      projectName: "",
      projectType: "web-app",
      problemStatement: "",
      solutionIdea: "",
      targetAudience: [],
      audienceSize: "medium",
      userNeeds: [],
      mustHaveFeatures: [],
      niceToHaveFeatures: [],
      integrations: [],
      technicalRequirements: [],
      complianceNeeds: [],
      scalabilityNeeds: "medium",
      budgetRange: "$5k-$10k",
      timeline: "3-6 months",
      hasTeam: false,
      additionalNotes: "",
    },
    mode: "onChange",
  });

  const steps = [
    { number: 1, title: "Project Overview", component: Step1Overview },
    { number: 2, title: "Target Audience", component: Step2Audience },
    { number: 3, title: "Core Features", component: Step3Features },
    { number: 4, title: "Technical Needs", component: Step4Technical },
    { number: 5, title: "Budget & Timeline", component: Step5Budget },
  ];

  const CurrentStepComponent = steps[currentStep - 1].component;

  const handleNext = async () => {
    const fieldsToValidate = getStepFields(currentStep);
    const isValidStep = await trigger(fieldsToValidate);

    if (isValidStep && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      toast.error("Please fill all required fields correctly");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getStepFields = (step: number): (keyof IdeaClarityFormData)[] => {
    switch (step) {
      case 1:
        return [
          "projectName",
          "projectType",
          "problemStatement",
          "solutionIdea",
        ];
      case 2:
        return ["targetAudience", "audienceSize", "userNeeds"];
      case 3:
        return ["mustHaveFeatures"];
      case 4:
        return ["scalabilityNeeds"];
      case 5:
        return ["budgetRange", "timeline"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: IdeaClarityFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/idea-clarity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionId(result.id);
        toast.success("Blueprint generated successfully!");

        // Redirect to results page after 1.5 seconds
        setTimeout(() => {
          window.location.href = `/idea-clarity/results/${result.id}`;
        }, 1500);
      } else {
        throw new Error(result.error || "Failed to generate blueprint");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to generate blueprint. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Step {currentStep} of {steps.length}
          </div>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {Math.round(progress)}% Complete
          </div>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
          />
        </div>
      </div>

      {/* Steps Indicator */}
      <div className="flex justify-between mb-12 relative">
        {steps.map((step) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center relative z-10">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  currentStep >= step.number
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-gray-300 dark:border-gray-700 text-gray-500"
                }`}
              >
                {currentStep > step.number ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  step.number
                )}
              </div>
              <div
                className={`text-xs mt-2 text-center ${
                  currentStep === step.number
                    ? "font-semibold text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {step.title}
              </div>
            </div>
            {step.number < steps.length && (
              <div
                className={`absolute top-5 left-1/2 -translate-x-1/2 w-full h-0.5 -z-10 ${
                  currentStep > step.number
                    ? "bg-blue-600"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                style={{
                  left: `${(step.number - 0.5) * (100 / steps.length)}%`,
                  width: `${100 / steps.length}%`,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Form Content */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8 mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentStepComponent
              register={register}
              watch={watch}
              setValue={setValue}
              errors={errors}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all ${
            currentStep === 1
              ? "opacity-50 cursor-not-allowed text-gray-500"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>

        {currentStep < steps.length ? (
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-700 hover:to-cyan-600 transition-all flex items-center space-x-2"
          >
            <span>Next Step</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting || !isValid}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 text-white font-medium hover:from-green-700 hover:to-emerald-600 transition-all flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Generating Blueprint...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Generate Blueprint</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Step Info */}
      <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-blue-600 dark:text-blue-400 text-xs">i</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              {currentStep === 1 &&
                "Be specific about the problem you want to solve. The clearer the problem, the better the solution."}
              {currentStep === 2 &&
                "Think about your ideal users. What are their pain points and needs?"}
              {currentStep === 3 &&
                "Focus on core features first. You can always add more later."}
              {currentStep === 4 &&
                "Consider future growth. It's cheaper to build scalable from the start."}
              {currentStep === 5 &&
                "Realistic budgets and timelines lead to successful projects."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaClarityForm;
