import "./skills.css";

function Skills() {
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
          <li>Networking & Security: Wireshark, Cisco Packet Tracer </li>
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
