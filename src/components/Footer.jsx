import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container" id="contacts">
      <h1>Let&apos;s keep in touch!</h1>
      <div className="footer-social-links-container">
        <a
          href="https://github.com/SerenePrince"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link-container"
        >
          <FaGithub size={25} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/nparknguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link-container"
        >
          <FaLinkedin size={25} />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:noahparknguyen@gmail.com"
          className="footer-social-link-container"
        >
          <FaEnvelope size={25} />
          <span>Email</span>
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Noah Park-Nguyen. All rights reserved.
      </p>
      <Link
        to="header"
        className="footer-back-to-top-container"
        smooth={true}
        duration={500}
      >
        <FaArrowUp size={25} />
        Back to Top
      </Link>
    </footer>
  );
}

export default Footer;
