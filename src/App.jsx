import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white selection:text-black">
      
      {/* 1. Frosted Glass Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-zinc-950/60 border-b border-zinc-800/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-lg hover:opacity-80 transition">
            SS.dev
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#certifications" className="hover:text-white transition">Certifications</a>
          </div>
          <a
            href="mailto:shrivastavashweta2704@gmail.com"
            className="px-4 py-2 rounded-xl bg-zinc-100 text-zinc-900 text-sm font-semibold hover:bg-zinc-200 transition"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* 2. Wide Hero Section */}
      <section className="pt-36 pb-24 px-6 max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center min-h-[85vh]">
        <div className="md:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to internships & entry-level roles
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Shweta Shrivastava
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-400 font-medium">
            MCA Student • Backend Developer • Python & Java Enthusiast
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            I am a Master of Computer Applications student passionate about backend architectures, database modeling, and building high-performance, scalable web applications. 
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/shweta2704-shri"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-sm font-medium hover:bg-zinc-800 hover:text-white transition flex items-center gap-2"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shweta-shrivastava-14a6bb266"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-sm font-medium hover:bg-zinc-800 hover:text-white transition flex items-center gap-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">01 // Story</h2>
            <p className="text-3xl font-bold tracking-tight text-white">About Me</p>
          </div>
          <div className="md:col-span-7 grid gap-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
              Based in Nagpur, Maharashtra, I emphasize structural engineering basics like Object-Oriented programming and rigorous logic to write clean, secure code. My ultimate objective is to apply these problem-solving frameworks within professional team ecosystems.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900">
                <span className="text-sm font-semibold text-white block mb-1">Focus Areas</span>
                <span className="text-sm text-zinc-400">Backend Systems, Full-Stack web flows, and Database optimization paradigms.</span>
              </div>
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900">
                <span className="text-sm font-semibold text-white block mb-1">Core Competencies</span>
                <span className="text-sm text-zinc-400">Analytical thinking, multi-layered debugging, structure validation, and agile logic scaling.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">02 // Capabilities</h2>
          <p className="text-3xl font-bold tracking-tight text-white">Technical Framework</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 transition">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Python', 'C', 'C++'].map((lang) => (
                <span key={lang} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-xl text-xs font-medium">{lang}</span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 transition">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">Backend & Database</h3>
            <div className="flex flex-wrap gap-2">
              {['SQL', 'DBMS', 'SQLite', 'Django', 'PHP', 'CRUD Architecture'].map((db) => (
                <span key={db} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-xl text-xs font-medium">{db}</span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 transition">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">Tools & Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {['Git & GitHub', 'Linux Environment', 'OOP', 'Data Structures', 'Algorithms', 'SDLC Frameworks'].map((tool) => (
                <span key={tool} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-xl text-xs font-medium">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">03 // Deployments</h2>
          <p className="text-3xl font-bold tracking-tight text-white">Featured Projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 flex flex-col justify-between group hover:border-zinc-800 transition">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition">Smart Canteen Management</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Built a full-stack web architecture to automate order pipelines, track customer balance updates, and maximize performance optimization workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'SQLite'].map((tech) => (
                <span key={tech} className="bg-zinc-950 text-zinc-400 border border-zinc-800/60 px-2.5 py-1 rounded-lg text-xs">{tech}</span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 flex flex-col justify-between group hover:border-zinc-800 transition">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition">Food Waste Reduction System</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Created an intuitive operational platform map focused on data processing, user authentication metrics, and inventory sorting routines.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'JavaScript', 'MySQL'].map((tech) => (
                <span key={tech} className="bg-zinc-950 text-zinc-400 border border-zinc-800/60 px-2.5 py-1 rounded-lg text-xs">{tech}</span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 flex flex-col justify-between group hover:border-zinc-800 transition">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition">Student Management System</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Engineered a desktop interface application linked via JDBC pathways to store records safely and apply structural CRUD validation logic loops.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Java', 'SQL', 'JDBC'].map((tech) => (
                <span key={tech} className="bg-zinc-950 text-zinc-400 border border-zinc-800/60 px-2.5 py-1 rounded-lg text-xs">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Education Section */}
      <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">04 // Lineage</h2>
          <p className="text-3xl font-bold tracking-tight text-white">Academic Path</p>
        </div>

        <div className="max-w-3xl space-y-6">
          <div className="relative pl-6 border-l-2 border-zinc-800 space-y-2 group">
            <span className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-white transition"></span>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Master of Computer Applications (MCA)</h3>
              <span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded-md border border-zinc-800">Pursuing</span>
            </div>
            <p className="text-sm text-zinc-400">Shri Ramdeobaba College of Engineering and Management, Nagpur</p>
          </div>

          <div className="relative pl-6 border-l-2 border-zinc-800 space-y-2 group">
            <span className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-white transition"></span>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Bachelor of Science (Computer Science)</h3>
              <span className="text-xs font-medium text-zinc-400 bg-zinc-900 px-2 py-1 rounded-md border border-zinc-800">CGPA: 8.36 / 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Certifications Section */}
      <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">05 // Credentials</h2>
          <p className="text-3xl font-bold tracking-tight text-white">Verified Certifications</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Google Professional Certificate", desc: "Linux and SQL Infrastructure Data Management" },
            { title: "Google Professional Certificate", desc: "Network Security Fundamentals & Controls" },
            { title: "IBM Specialist Core Training", desc: "Databases and SQL Data Analytics Engine Processing with Python" },
            { title: "IBM Professional Training", desc: "Introduction to Core Cloud Computing Architecture Models" }
          ].map((cert, index) => (
            <div key={index} className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900/60 hover:border-zinc-800/80 transition flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-zinc-700 mt-2 shrink-0"></div>
              <div>
                <span className="text-xs font-bold text-zinc-500 block uppercase tracking-wider">{cert.title}</span>
                <span className="text-sm text-zinc-300 font-medium leading-relaxed mt-1 block">{cert.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-center text-xs text-zinc-600">
        <p>© 2026 Shweta Shrivastava. Structured with high fluid container mechanics.</p>
      </footer>
    </div>
  );
}
