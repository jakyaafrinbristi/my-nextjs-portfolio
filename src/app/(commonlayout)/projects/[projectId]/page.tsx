'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: number;
  projectName: string;
  projectImage: string;
  clientSideGithub: string;
  serverSideGithub?: string;
  liveLink: string;
  details: string;
  technologiesUsed: string[];
  willImprove: string[];
  challenges: string[];
};

export default function ProjectDetails() {
  const { projectId } = useParams(); 
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data: Project[]) => {
        const found = data.find((p) => p.id === Number(projectId));
        setProject(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>;

  if (!project) return <p className="text-red-500 text-center mt-10">Project not found</p>;

  const {
    projectName,
    projectImage,
    liveLink,
    willImprove,
    challenges,
    clientSideGithub,
    serverSideGithub,
    details,
    technologiesUsed
  } = project;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Image Section */}
          <div className="lg:w-1/2">
            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden border border-zinc-700 shadow-lg">
              <Image
                src={projectImage}
                alt={projectName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Links Section */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                href={liveLink} 
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center transition-colors"
              >
                Live Preview
              </Link>
              <Link 
                href={clientSideGithub} 
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-center transition-colors"
              >
                Client Code
              </Link>
              {serverSideGithub && (
                <Link 
                  href={serverSideGithub} 
                  target="_blank"
                  className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-center transition-colors col-span-1 sm:col-span-2"
                >
                  Server Code
                </Link>
              )}
            </div>
          </div>

          {/* Project Details Section */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
              {projectName}
            </h1>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-200">Project Description</h2>
              <p className="text-gray-300 leading-relaxed">{details}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-200">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {technologiesUsed.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-200">Challenges Faced</h2>
              <ul className="space-y-2">
                {challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-rose-400 mr-2">•</span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-200">Future Improvements</h2>
              <ul className="space-y-2">
                {willImprove.map((improvement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-gray-300">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}