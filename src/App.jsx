export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
          Shweta Shrivastava
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          MCA Student • Backend Developer • Python & Java Enthusiast
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="mailto:shrivastavashweta2704@gmail.com"
            className="px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/shweta2704-shri"
            target="_blank"
            className="px-6 py-3 border border-white rounded-2xl hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/shweta-shrivastava-14a6bb266"
            target="_blank"
            className="px-6 py-3 border border-white rounded-2xl hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-8">
              I am an MCA student passionate about backend development,
              databases, and building scalable applications. I enjoy solving
              real-world problems using Java, Python, SQL, and web technologies.
              My focus is on writing clean, maintainable code and continuously
              improving my software engineering skills.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Quick Info</h3>
            <div className="space-y-4 text-gray-300">
              <p>📍 Nagpur, Maharashtra</p>
              <p>🎓 MCA Student</p>
              <p>💻 Backend & Full Stack Development</p>
              <p>⚡ Interested in Cybersecurity & Databases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-950 px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>C++</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-4">Backend & Database</h3>
              <ul className="space-y-2 text-gray-300">
                <li>SQL</li>
                <li>DBMS</li>
                <li>SQLite</li>
                <li>Django</li>
                <li>PHP</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-4">Tools & Concepts</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Git & GitHub</li>
                <li>Linux</li>
                <li>OOP</li>
                <li>Data Structures & Algorithms</li>
                <li>SDLC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Smart Canteen Management System
              </h3>
              <p className="text-gray-300 leading-7 mb-6">
                Built a full-stack Django web application to automate food ordering workflows and streamline canteen operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Django</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">SQLite</span>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Food Waste Reduction System
              </h3>
              <p className="text-gray-300 leading-7 mb-6">
                Developed a responsive web platform focused on food redistribution, authentication, and inventory management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">PHP</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Student Management System
              </h3>
              <p className="text-gray-300 leading-7 mb-6">
                Created a Java-based desktop application with JDBC integration for managing student records and CRUD operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">SQL</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">JDBC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-950 px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Education</h2>

          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-semibold">Master of Computer Applications (MCA)</h3>
              <p className="text-gray-300 mt-2">
                Shri Ramdeobaba College of Engineering and Management, Nagpur
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-semibold">Bachelor of Science (Computer Science)</h3>
              <p className="text-gray-300 mt-2">CGPA: 8.36/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <p className="text-gray-300">
                Google Professional Certificate – Linux and SQL
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <p className="text-gray-300">
                Google Professional Certificate – Network Security
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <p className="text-gray-300">
                IBM – Databases and SQL for Data Science with Python
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <p className="text-gray-300">
                IBM – Introduction to Cloud Computing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-400">
        <p>© 2026 Shweta Shrivastava. All rights reserved.</p>
      </footer>
    </div>
  );
}
