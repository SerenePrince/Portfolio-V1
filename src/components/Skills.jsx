import { useEffect } from "react";
import "./skills.css";

function Skills() {
  useEffect(() => {
    const sections = document.querySelectorAll(".skills-list-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the fade-in and floating classes when section is in view
            entry.target.classList.add("fade-in", "floating");

            // Random delay for the animation (between 0.5s to 2s)
            const randomDelay = Math.random() * (2 - 0.5) + 0.5;
            entry.target.style.animationDelay = `${randomDelay}s`; // Apply random delay
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-container" id="skills">
      <h1>My Skillset</h1>
      <div className="skills-list-container">
        <ul>
          <li>
            Programming Languages: Java, C, C++, Python, R, SQL, JavaScript,
            PHP, Assembly
          </li>
          <li>
            Software Development & Tools: Visual Studio, Visual Studio Code,
            Eclipse, Git, GitHub, Microsoft Azure DevOps, VMWare Workstation
          </li>
          <li>
            Web Development & Frameworks: JavaScript, HTML, CSS, React, JavaFX,
            Java Swing, PyQt5
          </li>
          <li>Databases: MySQL, MySQL Workbench</li>
          <li>Networking & Security: Wireshark, Cisco Packet Tracer</li>
          <li>Operating Systems: Linux (Ubuntu), Windows 10, Windows 11</li>
          <li>
            Productivity & Collaboration: Microsoft Office (Word, PowerPoint,
            Outlook, Teams, SharePoint), Zoom
          </li>
          <li>Languages: English (Fluent), French (Conversational)</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
