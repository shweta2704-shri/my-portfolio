import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code2,
  Database,
  Server,
} from "lucide-react";

export default function Portfolio() {
  const skills = [
    "Python",
    "Java",
    "C++",
    "Django",
    "React",
    "MySQL",
    "SQLite",
    "Git",
    "Linux",
    "REST APIs",
    "OOP",
    "Data Structures",
  ];

  const projects = [
    {
      title: "Smart Canteen Management System",
      desc: "A backend-driven food ordering and balance management platform designed to automate workflows and improve operational efficiency.",
      tech: ["Python", "Django", "SQLite"],
    },
    {
      title: "Food Waste Reduction System",
      desc: "An intelligent inventory and waste tracking system focused on analytics, optimization, and efficient food management.",
      tech: ["PHP", "JavaScript", "MySQL"],
    },
    {
      title: "Student Management System",
      desc: "Desktop-based CRUD application integrated with JDBC connectivity and secure database management features.",
      tech: ["Java", "SQL", "JDBC"],
    },
  ];

  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="w-full border-b border-gray-800 backdrop-blur-lg sticky top-0 z-50 bg-[#0f172a]/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-violet-400">
            Shweta.dev
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-violet-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-violet-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-violet-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-violet-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <p className="text-violet-400 font-medium mb-4">
            Backend Developer • MCA Student
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm <span className="text-violet-400">Shweta</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
            Passionate backend developer focused on building scalable APIs,
            database-driven systems, and high-performance web applications using
            Python, Java, and modern development technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-violet-500 hover:bg-violet-600 transition px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </button>

            <button className="border border-gray-700 hover:border-violet-500 hover:text-violet-400 transition px-6 py-3 rounded-xl font-semibold">
              View Projects
            </button>
          </div>

          <div className="flex gap-5 mt-10">
            <a
              href="https://github.com/"
              target="_blank"
              className="bg-[#1e293b] p-4 rounded-xl hover:bg-violet-500 transition"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="bg-[#1e293b] p-4 rounded-xl hover:bg-violet-500 transition"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="bg-[#1e293b] p-4 rounded-xl hover:bg-violet-500 transition"
            >
              <Mail />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gradient-to-br from-violet-500 to-indigo-600 p-[1px] rounded-3xl shadow-2xl">
            <div className="bg-[#111827] rounded-3xl p-10 w-[360px]">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-violet-500 flex items-center justify-center text-5xl font-bold">
                  S
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-2">
                Shweta Shrivastava
              </h2>

              <p className="text-gray-400 text-center mb-8">
                Backend Developer
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Server className="text-violet-400" />
                  <span className="text-gray-300">
                    Backend Architecture
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Database className="text-violet-400" />
                  <span className="text-gray-300">Database Systems</span>
                </div>

                <div className="flex items-center gap-4">
                  <Code2 className="text-violet-400" />
                  <span className="text-gray-300">API Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800"
      >
        <h2 className="text-4xl font-bold mb-10">
          About <span className="text-violet-400">Me</span>
        </h2>

        <p className="text-gray-400 leading-relaxed text-lg max-w-4xl">
          I am currently pursuing a Master of Computer Applications (MCA) and
          specialize in backend development, database design, and scalable
          system architecture. I enjoy solving real-world problems through clean
          and optimized code while continuously improving my development and
          analytical skills.
        </p>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800"
      >
        <h2 className="text-4xl font-bold mb-12">
          Technical <span className="text-violet-400">Skills</span>
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] hover:bg-violet-500 transition px-5 py-3 rounded-xl text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800"
      >
        <h2 className="text-4xl font-bold mb-12">
          Featured <span className="text-violet-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-violet-500 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#1e293b] text-violet-400 px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-violet-400 hover:gap-3 transition-all">
                View Project <ExternalLink size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-12">
          Education & <span className="text-violet-400">Certifications</span>
        </h2>

        <div className="space-y-8">
          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-violet-400 mt-2">
              Shri Ramdeobaba College of Engineering & Management
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold">
              Google Professional Certificate
            </h3>

            <p className="text-gray-400 mt-2">
              Linux, SQL, IT Infrastructure & Database Management
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800"
      >
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Great
          </h2>

          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Open to internships, collaborations, and backend development
            opportunities.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Shweta Shrivastava • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
