import HeroSection from "./_components/hero";
import AboutMe from "./_components/about-me";
import MySkills from "./_components/my-skills";
import ToolsAndTechnology from "./_components/tools-and-technology";
import ProjectsSection from "./_components/projects";
import ContactUs from "./_components/contact-us";
import ContactFab from "@/components/shared/ContactFab";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090D16] text-white selection:bg-[#FF7639] selection:text-white relative">
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutMe />

      {/* My Skills Section */}
      <MySkills />

      {/* Tools and Technology Section */}
      <ToolsAndTechnology />

      {/* Projects Showcase Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactUs />

      {/* Quick Contact Floating Action Button */}
      <ContactFab />
    </main>
  );
}
