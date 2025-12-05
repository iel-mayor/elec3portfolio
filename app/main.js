const assignments = [
  { 
    title: "Assignment #1: REST API Operations (Postman)",
    description: "Demonstration of CRUD operations (POST, GET, PUT, DELETE) using Postman.",
    filename: "/Mayor - Assignment#1.pdf",
    tags: ["Postman", "API", "CRUD"]
  },
  { 
    title: "Assignment #2: AWS Tutorial and Free Tier Setup",
    description: "Overview of AWS, its benefits, and steps for creating a free account.",
    filename: "/Mayor - Assignment#2.pdf",
    tags: ["AWS", "Cloud", "Security"]
  },
  { 
    title: "Assignment #3: Docker and Containerization Study Plan",
    description: "A 6-week study plan covering Docker fundamentals, Dockerfiles, networking, and Docker Compose.",
    filename: "/Mayor - Assignment#3.pdf",
    tags: ["Docker", "Containers", "DevOps"]
  },
  { 
    title: "Assignment #4: Virtualization vs. Containerization Analysis",
    description: "An article comparing VMs and Containers, focusing on efficiency for Edge Computing.",
    filename: "/Mayor - Assignment#4.pdf",
    tags: ["Virtualization", "Edge Computing", "Efficiency"]
  },
  { 
    title: "Assignment #5: Kubernetes and Minikube Lab Activities",
    description: "Hands-on lab covering Minikube, kubectl commands, and deploying WordPress with persistent volumes.",
    filename: "/Mayor - Assignment#5.pdf",
    tags: ["Kubernetes", "Minikube", "Cloud Native"]
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Mark Ronniel S. Mayor - Course Assignments
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          IV - BCSAD | Technical Documentation Portfolio
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {assignments.map((assignment, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {assignment.title}
              </h2>
              <p className="text-gray-600 mb-4">{assignment.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {assignment.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={assignment.filename} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-150"
              >
                View PDF 📄
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}