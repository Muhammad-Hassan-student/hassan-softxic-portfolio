"use client";

// Import all components
import Hero from "@/app/components/sections/Hero";
import Profile from "@/app/components/sections/Profile";
import Services from "@/app/components/sections/Services";
import Skills from "@/app/components/sections/Skills";
import ProblemSolution from "@/app/components/sections/ProblemSolution";
import Projects from "@/app/components/sections/Project";
import Architecture from "@/app/components/sections/Architectures";
import Process from "@/app/components/sections/Process";
import WhyMe from "@/app/components/sections/WhyMe";
import Failures from "@/app/components/sections/Failures";
import Testimonials from "@/app/components/sections/Testimonials";
import Availability from "@/app/components/sections/Availability";
import Contact from "@/app/components/sections/Contact";
import BookingCTA from "./components/sections/BookingCTA";
import SkillMatcher from "./components/sections/SkillMatcher";
import ClientPortal from "./components/dashboard/ClientPortal";
import ProjectPlanner from "./components/sections/ProjectPlanner";
import CodeQualityScanner from "./components/sections/CodeQualityScanner";
import AutomatedProposal from "./components/sections/AutomatedProposal";
import ClientResults from "./components/sections/ClientResults";
import LiveProjectTracker from "./components/sections/LiveProjectTracker";
import InteractiveDemo from "./components/premium/InteractiveDemo";
import MarketingServices from "./components/services/MarketingServices";
import DesignServices from "./components/services/DesignServices";
import ClientPortall from "./components/client/ClientPortal";
import AgencyDashboard from "./components/admin/Dashboard";

// Component showcase section

export default function Home() {
  return (
    <>
      {/* Showcase all components in order */}
      {/* Actual Homepage Sections */}
      <Hero />
      <Profile />
      <ClientResults /> {/* Powerful social proof */}
      <Services />
      <Skills />
      <InteractiveDemo />
      {/* // New Added */}
      <MarketingServices />
      <DesignServices />
      {/* <ClientPortall /> */}
      {/* <AgencyDashboard /> */}
      <ProblemSolution />
      <Projects />
      <LiveProjectTracker /> {/* Builds trust instantly */}
      <Architecture />
      <Process />
      <WhyMe />
      <Failures />
      <Testimonials />
      <Availability />
      <BookingCTA />
      <AutomatedProposal />
      <CodeQualityScanner />
      <ProjectPlanner />
      <SkillMatcher />
      <ClientPortal />
      <Contact />
    </>
  );
}
