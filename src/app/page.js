"use client";
import { useState } from "react";
import TabsNav from "@/components/TabsNav";
import ProfileSection from "@/components/ProfileSection";
import AcademicsSection from "@/components/AcademicsSection";
import SkillsSection from "@/components/SkillsSection";
import ExtrasSection from "@/components/ExtrasSections";
import Footer from "@/components/Footer";

const profile = {
  name: "Rinku Murmu",
  photo: "/images/profile.jpg",
  bio: "Passionate full-stack developer with a strong focus on building scalable frontend experiences and high-performance backends.",
  contact: {
    email: "rinkumurmu8@gmail.com",
    phone: "+91 7488040620",
    location: "Dumka,Jharkhand"
  },
  academics: [
    {
      title: "B.Sc. in Computer Science",
      institution: "University of Technology",
      year: "2019"
    },
     {
      title: "Master's in Computer Application",
      institution: "Sido Kanhu Murmu University",
      year: "2024"
    },
    {
      title: "Frontend Developer Intern",
      institution: "TechCorp Inc.",
      year: "2022"
    }
  ],
  skills: ["JavaScript", "React.js", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB", "Docker"],
  extras: {
    goals: "To architect enterprise-level applications and lead a world-class engineering team.",
    hobbies: ["Photography", "Cycling", "Open Source Contribution"],
    certifications: ["AWS Certified Cloud Practitioner", "Frontend Masters - Advanced React"]
  }
};

const tabs = ["Profile", "Academics", "Skills", "Extras"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4 md:p-8 font-sans">
      <header className="max-w-5xl mx-auto mb-8">
        <TabsNav tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <main className="max-w-5xl mx-auto space-y-8">
        {activeTab === "Profile" && <ProfileSection profile={profile} />}
        {activeTab === "Academics" && <AcademicsSection academics={profile.academics} />}
        {activeTab === "Skills" && <SkillsSection skills={profile.skills} />}
        {activeTab === "Extras" && <ExtrasSection extras={profile.extras} />}
      </main>

      <Footer name={profile.name} />
    </div>
  );
}
