export default function ShwetaPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">Shweta Shrivastava</h1>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            MCA Student & Aspiring Developer
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Building smart and scalable digital solutions.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Pursuing MCA with strong foundations in Java, Python, SQL, and data analysis.
            Passionate about backend development, software engineering, and solving
            real-world problems through technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
            >
              View Projects
            </a>

            <a
              href="mailto:shrivastavashweta2704@gmail.com"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-700 p-1 shadow-2xl shadow-cyan-500/30">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-center px-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Shweta</h3>
                <p className="text-slate-400">Java • Python • SQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-bold mb-6">About Me</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              I am an MCA student with a strong academic background in computer science.
              I enjoy developing software solutions, learning new technologies, and
              improving my analytical and problem-solving abilities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-cyan-400 text-3xl font-bold">8.36</h4>
              <p className="text-slate-300 mt-2">B.Sc CS CGPA</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-cyan-400 text-3xl font-bold">2+</h4>
              <p className="text-slate-300 mt-2">Academic Projects</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-cyan-400 text-3xl font-bold">4+</h4>
              <p className="text-slate-300 mt-2">Programming Languages</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-cyan-400 text-3xl font-bold">MCA</h4>
              <p className="text-slate-300 mt-2">Currently Pursuing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white/5 border-y border-white/10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Technical Skills</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
              <h4 className="text-2xl font-semibold mb-4 text-cyan-400">Programming</h4>
              <div className="flex flex-wrap gap-3">
                {['C', 'C++', 'Java', 'Python'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
              <h4 className="text-2xl font-semibold mb-4 text-cyan-400">Database & Backend</h4>
              <div className="flex flex-wrap gap-3">
                {['SQL', 'DBMS', 'CRUD', 'Database Design'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
              <h4 className="text-2xl font-semibold mb-4 text-cyan-400">Tools & Concepts</h4>
              <div className="flex flex-wrap gap-3">
                {['OOP', 'Data Structures', 'MS Excel', 'Linux', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold mb-12 text-center">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <h4 className="text-2xl font-bold mb-4">Student Management System</h4>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Developed a student record management system using Java and SQL with CRUD functionality.
              Implemented Object Oriented Programming concepts for clean and modular development.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Java', 'SQL', 'OOP'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <h4 className="text-2xl font-bold mb-4">Data Analysis Mini Project</h4>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Analyzed datasets using SQL queries and MS Excel. Performed data cleaning,
              data interpretation, and generated analytical insights through reports.
            </p>

            <div className="flex flex-wrap gap-3">
              {['SQL', 'Excel', 'Data Analysis'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-white/5 border-y border-white/10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Education</h3>

          <div className="space-y-6">
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
              <h4 className="text-2xl font-semibold">Master of Computer Applications (MCA)</h4>
              <p className="text-cyan-400 mt-2">Shri Ramdeobaba College of Engineering and Management</p>
              <p className="text-slate-400 mt-1">Currently Pursuing</p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
              <h4 className="text-2xl font-semibold">Bachelor of Science (Computer Science)</h4>
              <p className="text-slate-300 mt-2">CGPA: 8.36 / 10</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-semibold">12th Standard</h4>
                <p className="text-slate-300 mt-2">81.83%</p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-semibold">10th Standard</h4>
                <p className="text-slate-300 mt-2">93%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h3 className="text-5xl font-bold mb-6">Let’s Connect</h3>
        <p className="text-slate-300 text-lg mb-10">
          Open to internship and entry-level opportunities in software development,
          backend development, and data analytics.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:shrivastavashweta2704@gmail.com"
            className="px-6 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            shrivastavashweta2704@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/shweta-shrivastava-14a6bb266"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            LinkedIn Profile
          </a>
        </div>

        <p className="text-slate-500 mt-12">
          © 2026 Shweta Shrivastava. All rights reserved.
        </p>
      </section>
    </div>
  );
}
