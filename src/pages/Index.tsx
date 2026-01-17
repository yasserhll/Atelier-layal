import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectDetail from "@/components/ProjectDetail";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    document.body.style.overflow = "hidden";
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects onProjectClick={handleProjectClick} />
      <Experience />
      <Contact />
      <Footer />

      {/* Project Detail Modal */}
      <ProjectDetail
        projectId={selectedProject}
        onClose={handleCloseProject}
      />
    </div>
  );
};

export default Index;
