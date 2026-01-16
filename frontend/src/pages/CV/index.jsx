import { Link } from 'react-router-dom'

function CV() {
  const profile = {
    name: "MUHAMMAD DAWOOD",
    title: "Full-stack Developer",
    email: "dawdbutt66@gmail.com",
    phone: "+92 333 026 2115",
    location: "Pakistan",
    linkedin: "https://www.linkedin.com/in/muhammad-dawood-butt-113547260/",
    github: "https://github.com/Mdaw00d",
    bio: "Skilled Web Developer with hands-on experience in building responsive, high-performance websites using HTML, CSS, Tailwind CSS, JavaScript, and React. Strong focus on clean UI/UX, scalability, and efficient performance. Recently exploring and implementing Agentic AI concepts to enhance automation, improve user interactions, and build smarter, autonomous web features. Capable of turning requirements into reliable, user-friendly digital solutions that align with business goals and modern AI-driven standards."
  }

  const education = [
    {
      degree: "Web Development Course",
      institution: "Governor Initiative of Artificial Intelligence (GIAIC)",
      period: "Ongoing",
      details: [
        "Currently Learning: Agentic AI",
        "Currently Learning: Cloud Native Development",
        "Building full-stack web applications"
      ]
    },
    {
      degree: "Intermediate in Computer Science",
      institution: "Bahria College",
      period: "Completed 2023",
      details: [
        "Completed intermediate education in Computer Science",
        "Developed foundational programming skills"
      ]
    }
  ]

  const experience = [
    {
      title: "Freelance Front-End Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      responsibilities: [
        "Developed modern, responsive front-end projects for multiple clients",
        "Designed and built a fully functional e-commerce website with product listings, cart, and checkout features",
        "Created an AI-powered book website",
        "Ensured website performance, accessibility, and mobile responsiveness"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Projects & Learning",
      period: "2024 - Present",
      responsibilities: [
        "Made an AI Native book website using Spec Driven Development",
        "Built a To-do list app with full CRUD functionality",
        "Reduced bug rate by 30% through better development practices"
      ]
    }
  ]

  const skills = {
    frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js"],
    backend: ["Node.js", "Sanity CMS"],
    tools: ["Git", "GitHub", "VS Code"],
    other: ["Responsive Design", "Cross-Browser Compatibility", "Web Accessibility", "Spec Driven Development"]
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      {/* Header with back button - hidden in print */}
      <div className="bg-gray-900 py-4 print:hidden">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
          <button
            onClick={handlePrint}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / Download PDF
          </button>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 print:py-0 print:px-0">

        {/* Header Section */}
        <header className="text-center border-b-2 border-gray-300 pb-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{profile.name}</h1>
          <p className="text-xl text-cyan-600 font-semibold mb-4">{profile.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-cyan-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-1 hover:text-cyan-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {profile.phone}
            </a>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profile.location}
            </span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-600">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-600">
              GitHub
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-cyan-500 pb-2 mb-4">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-cyan-500 pb-2 mb-4">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Frontend Development</h3>
              <p className="text-gray-700">{skills.frontend.join(", ")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Backend Development</h3>
              <p className="text-gray-700">{skills.backend.join(", ")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Tools & Version Control</h3>
              <p className="text-gray-700">{skills.tools.join(", ")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Other Skills</h3>
              <p className="text-gray-700">{skills.other.join(", ")}</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-cyan-500 pb-2 mb-4">
            WORK EXPERIENCE
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-cyan-600">{exp.company}</p>
                </div>
                <span className="text-gray-600 text-sm">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-cyan-500 pb-2 mb-4">
            EDUCATION
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-cyan-600">{edu.institution}</p>
                </div>
                <span className="text-gray-600 text-sm">{edu.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Languages */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-cyan-500 pb-2 mb-4">
            LANGUAGES
          </h2>
          <div className="flex gap-8">
            <div>
              <span className="font-semibold text-gray-800">English</span>
              <span className="text-gray-600"> - Professional</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Urdu</span>
              <span className="text-gray-600"> - Native</span>
            </div>
          </div>
        </section>

      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden { display: none !important; }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          .print\\:px-0 { padding-left: 0 !important; padding-right: 0 !important; }
          .print\\:bg-white { background-color: white !important; }
        }
      `}</style>
    </div>
  )
}

export default CV
