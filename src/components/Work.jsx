import "./Work.css";

function Work() {
  return (
    <div className="work-container" id="work">
      <h1>Work & Professional Experience</h1>
      <div className="work-experience-container">
        <div className="work-experience-title-container">
          <h2>Student Tester</h2>
          <img
            src="./assets/images/ac-logo.png"
            alt="An image of Algonquin College's logo."
            className="work-ac-logo-image"
          ></img>
        </div>
        <div className="work-experience-info-container">
          <h3>Algonquin College, Ottawa, Ontario</h3>
          <h3>September 2024 - December 2024</h3>
        </div>
        <ul>
          <li>
            Enhanced user experience by developing and executing over{" "}
            <strong>200 test cases</strong> to validate the functionality of the
            student portal, ensuring high system reliability and user
            satisfaction.
          </li>
          <li>
            Identified and documented <strong>100+ critical bugs</strong>,
            facilitating swift resolutions and contributing to overall system
            stability and performance improvements.
          </li>
          <li>
            Created a comprehensive testing guide for new team members, reducing
            onboarding time and improving team efficiency.
          </li>
          <li>
            Led cross-functional collaboration meetings, fostering alignment and
            improving communication across teams to meet testing and project
            objectives.
          </li>
        </ul>
      </div>
      <div className="work-experience-container">
        <div className="work-experience-title-container">
          <h2>Application Developer</h2>
          <img
            src="./assets/images/fintrac-logo.png"
            alt="An image of fintrac's logo."
            className="work-fintrac-logo-image"
          ></img>
        </div>
        <div className="work-experience-info-container">
          <h3>
            Financial Transactions and Reports Analysis Centre of Canada,
            Ottawa, Ontario
          </h3>
          <h3>January 2024 - April 2024</h3>
        </div>
        <ul>
          <li>
            Automated document scanning using a custom Java application,
            reducing task completion time by <strong>95%</strong>, significantly
            enhancing operational efficiency.
          </li>
          <li>
            Resolved <strong>100+ codebase issues</strong>, improving system
            stability, minimizing client-side errors, and ensuring smoother user
            experiences.
          </li>
          <li>
            Designed and executed <strong>50+ test cases</strong> for client
            form validation, improving data accuracy and reducing errors by{" "}
            <strong>10%</strong>.
          </li>
          <li>
            Collaborated on troubleshooting efforts, enhancing team productivity
            and fostering cross-team communication to resolve issues faster.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
