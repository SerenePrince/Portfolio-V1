import { useEffect } from "react";
import "./education.css";

function Education() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".education-experience-container"
    );

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
    <div className="education-container" id="education">
      <h1>Education & Certifications</h1>
      <div className="education-experience-container">
        <div className="education-degree-container">
          <h2>
            <a href="https://www.algonquincollege.com/sat/program/computer-engineering-technology-computing-science/">
              Computer Engineering Technology - Computer Science
            </a>
          </h2>
          <img
            src="./assets/images/ac-logo.png"
            alt="An image of Algonquin College's logo."
            className="education-ac-logo-image"
          ></img>
        </div>
        <div className="education-title-container">
          <h3>Algonquin College</h3>
          <h3>Ottawa, Ontario</h3>
        </div>
        <ul>
          <li> GPA: 3.76 / 4.0</li>
          <li>
            Dean&apos;s Honours List: Winter 2023, Spring 2023, Fall 2023,
            Spring 2024
          </li>
          <li>
            Coursework: Object-Oriented Programming, Network Programming Basics,
            Operating System Fundamentals (GNU/Linux), Data Structures,
            Processor Architecture, C Language, Web Programming, Compilers, C++
            Programming, Java Application Programming, Numerical Computing
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
