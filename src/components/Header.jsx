import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <header className="header-container" id="header">
      <h1>Noah Park-Nguyen</h1>
      <nav>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
        <Link to="education" smooth={true} duration={500}>
          Education
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contacts" smooth={true} duration={500}>
          Contacts
        </Link>
        <a
          href="./assets/documents/NoahParkNguyenResume2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
