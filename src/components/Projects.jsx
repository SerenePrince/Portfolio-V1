import { useEffect } from "react";
import "./Projects.css";

function Projects() {
  useEffect(() => {
    const sections = document.querySelectorAll(".projects-section-container");

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
    <div className="projects-container" id="projects">
      <h1>Project Showcase</h1>
      <div className="projects-section-container">
        <a href="https://github.com/SerenePrince/Wordle-Clone">
          <h2>Wordle Clone</h2>
        </a>
        <p>
          Now, this one&apos;s a beauty. My first time using React, and I gotta
          say, I&apos;m pretty impressed with how it turned out. It works like a
          charm and has some nice visuals. Pretty proud of this one. Try it out
          it by clicking here!.
        </p>
        <div className="projects-project-container">
          <ul>
            <li>
              Responsive Design: The game adjusts for both desktop and mobile
              devices.
            </li>
            <li>
              Interactive UI: Users input guesses, and real-time feedback is
              provided.
            </li>
            <li>
              Game Logic: Letters are compared to the hidden word, with feedback
              given using color coding.
            </li>
            <li>
              Game Restart: After completing a game, users can refresh the page
              to try a new word.
            </li>
            <li>
              Customizable Background: Potential for dynamic background images
              based on game conditions.
            </li>
          </ul>
          <img
            src="./assets/images/wordle-clone-project.png"
            alt="An image of the Wordle clone game in progress."
          ></img>
        </div>
      </div>
      <div className="projects-section-container">
        <a href="https://github.com/SerenePrince/Weather-App">
          <h2>Weather App</h2>
        </a>
        <p>
          Now here&apos;s one I&apos;m genuinely excited to share. It was my
          first time using Python, and I think I did pretty well all things
          considered. I&apos;ll definitely keep coming back to this one to add
          more features.
        </p>
        <div className="projects-project-container">
          <ul>
            <li>
              City-Based Weather Search: Enter a city name to fetch current
              weather data.
            </li>
            <li>
              Temperature Display: Shows temperatures in Kelvin, Celsius, and
              Fahrenheit.
            </li>
            <li>
              Dynamic Weather Icons: Displays relevant icons for various weather
              conditions (e.g., ☀️ for clear skies).
            </li>
            <li>
              Error Handling: Displays user-friendly error messages for invalid
              input, network errors, or unsupported city names.
            </li>
            <li>
              Responsive Design: Adjusts font sizes and layout based on screen
              resolution.
            </li>
            <li>
              Customizable Background: Potential for dynamic background images
              based on weather conditions.
            </li>
          </ul>
          <img
            src="./assets/images/weather-app-project.png"
            alt="An image of the weather app in progress."
          ></img>
        </div>
      </div>
      <div className="projects-section-container">
        <a href="https://github.com/SerenePrince/Typing-Test">
          <h2>Typing Test</h2>
        </a>
        <p>
          Another one that&apos;s, well, not my best work. I was experimenting
          with JavaFX, something pretty new to me at the time, and ended up with
          something that works but could definitely be improved. Still, I&apos;m
          proud of it. I started with zero knowledge of JavaFX and ended up
          knowing a little bit about JavaFX.
        </p>
        <div className="projects-project-container">
          <ul>
            <li>
              Random Word List: The application generates a new list of 50
              random words each time you start the test.
            </li>
            <li>
              Real-Time Feedback: Words change color in real-time based on
              correctness, giving immediate feedback.
            </li>
            <li>
              Accuracy & WPM: Once the test is complete, users get their typing
              accuracy and words per minute.
            </li>
          </ul>
          <img
            src="./assets/images/typing-test-project.png"
            alt="An image of the typing test application in progress."
          ></img>
        </div>
      </div>
      <div className="projects-section-container">
        <a href="https://github.com/SerenePrince/Battleship-Game">
          <h2>Battleship Game</h2>
        </a>
        <p>
          To be honest, this one&apos;s a bit rough. It was my first big
          project, and it barely works. But hey, I&apos;m putting it here to
          show my progress. It&apos;s nice to look back and see how far
          I&apos;ve come.
        </p>
        <div className="projects-project-container">
          <ul>
            <li>
              Single Player: Play against a CPU opponent with varying difficulty
              levels.
            </li>
            <li>
              Multiplayer: Compete against other players over a network using
              TCP/IP.
            </li>
            <li>
              MVC Design Pattern: The project is structured using the
              Model-View-Controller design pattern for a cleaner, more
              maintainable architecture.
            </li>
          </ul>
          <img
            src="./assets/images/battleship-game-project.png"
            alt="An image of the battleship game in progress."
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
