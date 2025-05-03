'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';


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

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;

  if (!project) return <p className="text-red-500 text-center mt-10">Project not found</p>;

  const {
    projectName,
    liveLink,
    willImprove,
    challenges,
    clientSideGithub,
    serverSideGithub,
    details,
    technologiesUsed
  } = project;

  return (
    <div className="w-full min-h-screen text-white bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="max-w-4xl mx-auto mt-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-blue-500 mb-6">{projectName}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 font-semibold text-lg">Description:</div>
            <div className="md:col-span-2 text-gray-300">{details}</div>

            <div className="md:col-span-1 font-semibold text-lg">Live Link:</div>
            <div className="md:col-span-2 text-blue-400 hover:text-blue-300">
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                {liveLink}
              </Link>
            </div>

            <div className="md:col-span-1 font-semibold text-lg">Client Side Code:</div>
            <div className="md:col-span-2 text-blue-400 hover:text-blue-300">
              <Link href={clientSideGithub} target="_blank" rel="noopener noreferrer">
                {clientSideGithub}
              </Link>
            </div>

            <div className="md:col-span-1 font-semibold text-lg">Server Side Code:</div>
            <div className="md:col-span-2">
              {serverSideGithub ? (
                <Link
                  href={serverSideGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  {serverSideGithub}
                </Link>
              ) : (
                <span className="text-gray-400">No Server Side Implemented</span>
              )}
            </div>

            <div className="md:col-span-1 font-semibold text-lg">Technologies used:</div>
            <div className="md:col-span-2 text-indigo-400">
              <ul className="list-disc pl-5">
                {technologiesUsed.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1 font-semibold text-lg">Challenges I Faced:</div>
            <div className="md:col-span-2 text-rose-400">
              <ul className="list-disc pl-5">
                {challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1 font-semibold text-lg">Want to Improve in Future:</div>
            <div className="md:col-span-2 text-green-400">
              <ul className="list-disc pl-5">
                {willImprove.map((improvement, idx) => (
                  <li key={idx}>{improvement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
