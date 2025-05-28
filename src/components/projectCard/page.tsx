"use client";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project: {
    id: number;
    projectName: string;
    projectImage: string;
    liveLink: string;
    details: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="relative group bg-zinc-950 rounded-2xl shadow-xl overflow-hidden border border-zinc-800 hover:shadow-indigo-500/30 transition-shadow duration-300">
      <div className="relative w-full h-64">
        <Image
          src={project.projectImage}
          alt={project.projectName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl"
        />
      </div>
      <div className="p-5 space-y-4">
        <h1 className="text-2xl text-indigo-400 font-semibold text-center">
          {project.projectName}
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.details.slice(0, 120)}
          {project.details.length > 120 ? "..." : ""}
        </p>
        <div className="flex gap-4">
          <Link
            href={`/projects/${project.id}`}
            className="w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center"
          >
            View Details
          </Link>
          <Link
            href={project.liveLink}
            target="_blank"
            className="w-1/2 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center"
          >
            Live Site
          </Link>
        </div>
      </div>
    </div>
  );
}