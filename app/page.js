"use client";
import React, { useState } from 'react';

const assignments = [
  { 
    id: 1,
    title: "REST API Operations (Postman)",
    subtitle: "Backend Testing & Validation",
    description: "A comprehensive demonstration of CRUD operations against a local server.",
    details: [
      "Executed POST requests with JSON bodies (firstName, lastName) to create user entries.",
      "Validated HTTP Status codes: 201 Created for insertions and 200 OK for retrievals.",
      "Tested specific endpoints: `http://localhost:8080/api/users` for data management.",
    ],
    filename: "/Mayor - Assignment-1.pdf",
    tags: ["Postman", "JSON", "REST API", "HTTP 200/201"]
  },
  { 
    id: 2,
    title: "AWS Infrastructure Setup",
    subtitle: "Cloud Computing Fundamentals",
    description: "Setting up a cloud environment using AWS Free Tier for scalable deployment.",
    details: [
      "Analyzed key AWS benefits: Scalability, Cost-Effectiveness, and Global Reach.",
      "Configured root user security and identity verification for the Philippines region (+63).",
      "Established billing alerts to manage Free Tier limits effectively.",
    ],
    filename: "/Mayor - Assignment-2.pdf",
    tags: ["AWS", "Cloud Security", "Identity Management"]
  },
  { 
    id: 3,
    title: "Docker & Containerization",
    subtitle: "DevOps Study Plan",
    description: "A 6-week intensive plan covering the transition from virtualization to containerization.",
    details: [
      "Mastered Docker CLI commands: `docker run`, `docker ps`, and `docker images`.",
      "Designed custom images using Dockerfiles with FROM, WORKDIR, and COPY instructions.",
      "Implemented multi-container orchestration using Docker Compose and YAML structures.",
    ],
    filename: "/Mayor - Assignment-3.pdf",
    tags: ["Docker", "Dockerfile", "Docker Compose", "CLI"]
  },
  { 
    id: 4,
    title: "Virtualization vs. Containers",
    subtitle: "Edge Computing Analysis",
    description: "Technical analysis of deployment architectures for the 'Computing Continuum'.",
    details: [
      "Compared resource usage: VMs (Hardware Virtualization) vs. Containers (OS Virtualization).",
      "Identified containerization as the 'most ecologically advantageous' for edge devices.",
      "Highlighted efficiency in power consumption and startup speeds for modern apps.",
    ],
    filename: "/Mayor - Assignment-4.pdf",
    tags: ["Edge Computing", "Architecture", "Sustainability"]
  },
  { 
    id: 5,
    title: "Kubernetes Orchestration",
    subtitle: "Minikube Lab Environment",
    description: "Deploying full-stack applications using Kubernetes pods and services.",
    details: [
      "Initialized local clusters using `minikube start` with Docker drivers.",
      "Deployed a WordPress + MySQL stack using PersistentVolumes for data durability.",
      "Managed traffic exposure using `kubectl expose` and LoadBalancer services.",
    ],
    filename: "/Mayor - Assignment-5.pdf",
    tags: ["Kubernetes", "Minikube", "kubectl", "Full Stack"]
  },
];

export default function Portfolio() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-50 mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl opacity-50 mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16"> 
        <header className="mb-16 border-b border-slate-800 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-5xl font-bold text-white tracking-tight mb-2">
                Mark Ronniel S. Mayor
              </h1>
              <p className="text-xl text-cyan-400 font-medium">
                Computer Science Student | IV - BCSAD
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
                Portfolio
              </p>
              <p className="text-slate-400">Technical Documentation & Labs</p>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assignments.map((item) => (
            <div 
              key={item.id}
              className={`
                group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300
                hover:border-slate-600 hover:shadow-2xl hover:shadow-cyan-900/10
                ${expandedId === item.id ? 'md:col-span-2 border-cyan-900/50 bg-slate-800/50' : ''}
              `}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider mb-1 block">
                      {item.subtitle}
                    </span>
                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h2>
                  </div>
                  <span className="text-slate-600 font-mono text-sm border border-slate-800 px-2 py-1 rounded">
                    0{item.id}
                  </span>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-900/50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


                <div className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${expandedId === item.id ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}
                `}>
                  <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/50">
                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Technical Achievements
                    </h3>
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-slate-600 rounded-full shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                  <button 
                    onClick={() => toggleExpand(item.id)}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {expandedId === item.id ? 'Show Less' : 'View Details'}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${expandedId === item.id ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <a 
                    href={item.filename}
                    download={true} 
                    className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-blue-900/20"
                  >
                    Download PDF
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </main>
        
        <footer className="mt-20 text-center text-slate-600 text-sm">
          <p>© 2025 Mark Ronniel Mayor. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}