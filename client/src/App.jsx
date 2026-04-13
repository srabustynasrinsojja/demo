import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, [API_URL]);

  return (
    <div className="container">
      <nav className="navbar">
        <h2>My Portfolio</h2>
        <div>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Srabusty Nasrin Sojja</h1>
        <p>CSE Student | Aspiring Developer | Passionate Learner</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a motivated, detail-oriented, and passionate student. I have
          developed strong skills through my coursework and extracurricular
          activities. I am eager to apply my knowledge and skills in real-world
          settings.
        </p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>SSC</h3>
            <p><strong>Institute:</strong> Sabera Sobhan Gov’t Girls High School, Brahmanbaria</p>
            <p><strong>Session:</strong> 2017-2018</p>
            <p><strong>Result:</strong> GPA 5.00</p>
          </div>

          <div className="project-card">
            <h3>HSC</h3>
            <p><strong>Institute:</strong> Trust College, Uttara, Dhaka</p>
            <p><strong>Session:</strong> 2019-2020</p>
            <p><strong>Result:</strong> GPA 5.00</p>
          </div>

          <div className="project-card">
            <h3>BSc in CSE</h3>
            <p><strong>Institute:</strong> East West University, Aftabnagar, Dhaka</p>
            <p><strong>Department:</strong> Computer Science and Engineering</p>
            <p><strong>Status:</strong> Ongoing</p>
            <p><strong>Semester:</strong> 8th</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>C Programming</li>
          <li>Java</li>
          <li>Oracle</li>
          <li>Oracle Apex</li>
          <li>MS Word</li>
          <li>MS Excel</li>
          <li>PowerPoint</li>
          <li>Outlook</li>
        </ul>
      </section>

      <section id="languages">
        <h2>Languages</h2>
        <ul className="skills-list">
          <li>Bangla</li>
          <li>English</li>
          <li>Hindi</li>
        </ul>
      </section>

      <section id="achievements">
        <h2>Achievements & Expertise</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Expertise</h3>
            <p>Strong ability to perform and deliver speech with clarity and emotion.</p>
            <p>Delivered presentations by simplifying technical concepts for audiences.</p>
            <p>Resolved logistical challenges through better task delegation.</p>
            <p>Led teams in organizing events.</p>
          </div>

          <div className="project-card">
            <h3>Achievements</h3>
            <p>Winner of district-level poetry recitation contests several times.</p>
            <p>Winner of division-level poetry recitation contests several times.</p>
            <p>Winner of Advaita Mela Recitation Contest.</p>
            <p>Winner of Nazrul-Rabindra Jayanti.</p>
            <p>Winner of college-level recitation competition in 2019.</p>
            <p>Certified by BSS for attending a workshop on journalism.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="project-card">
          <p><strong>Phone:</strong> 01535233468</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sojjasrabustynasrin@gmail.com">
              sojjasrabustynasrin@gmail.com
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/srabustynasrinsojja"
              target="_blank"
              rel="noreferrer"
            >
              github.com/srabustynasrinsojja
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/srabusty-nasrin-sojja"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/srabusty-nasrin-sojja
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;