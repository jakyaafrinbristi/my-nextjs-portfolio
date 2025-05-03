"use client"; 

import { useEffect, useState } from "react";
import ProjectCard from "../projectCard/page";

type Project = {
  id: number;
  projectName: string;
  projectImage: string;
  clientSideGithub: string;
  serverSideGithub: string;
  liveLink: string;
  details: string;
  technologiesUsed: string[];
  willImprove: string[];
  challenges: string[];
};


const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json") 
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-6 py-12">
      <div className="text-center space-y-3 pb-16">
     
        <h1 className="font-bold text-indigo-500 text-3xl font-serif">View My Projects</h1>
        <p className="text-center max-w-3xl mx-auto text-gray-500 font-medium">
          Explore my featured projects showcasing innovative solutions, modern designs, and
          cutting-edge technologies, reflecting my passion for web development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
