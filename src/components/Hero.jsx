import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <img
        src="./assets/images/hero-profile.jpg"
        alt="An image of Noah Park-Nguyen"
        className="hero-profile-image"
      ></img>
      <div className="hero-text-container">
        <h1>
          Hi <span className="wave">👋</span> I&apos;m Noah.
        </h1>
        <h2>
          An aspiring software developer passionate about creating impactful and
          innovative solutions.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
