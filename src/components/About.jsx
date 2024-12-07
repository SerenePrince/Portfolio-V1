import "./About.css";

function About() {
  return (
    <div className="about-container" id="about">
      <h1>About Me!</h1>
      <div className="about-section-container">
        <p>
          I was born and raised in a nice little city called Coquitlam, British
          Columbia. Growing up, I was a bit of a math and science nerd. I loved
          playing video games and spent way too much time on the family computer
          (probably more than I should have). These passions eventually led me
          down the path toward computer science.
        </p>
        <figure>
          <img
            src="./assets/images/baby-me.png"
            alt="Noah Park-Nguyen as a baby."
            className="about-baby-me-image"
          ></img>{" "}
          <figcaption>Me as a baby boy.</figcaption>
        </figure>
      </div>
      <div className="about-section-container">
        <p>
          Fast forward a few years, I took my first big step into adulthood by
          moving out of my parents&apos; house to Ottawa, the Canadian capital,
          to study Computer Engineering Technology at Algonquin College.
        </p>
        <figure>
          <img
            src="./assets/images/teenage-me.png"
            alt="Noah Park-Nguyen as a teenager in a graduation gown."
            className="about-teenage-me-image"
          ></img>{" "}
          <figcaption>Me as a graduating boy.</figcaption>
        </figure>
      </div>
      <div className="about-section-container">
        <p>
          My first year was rough. I was nervous, homesick, and struggling with
          imposter syndrome, which made falling behind easy. But through all the
          self-doubt and negativity, I kept pushing forward. Eventually, things
          started to click, and I found myself enjoying the process a lot more.
          <br></br>
          <br></br>Those challenges ultimately helped me land my first job as an
          Application Developer at FINTRAC. It was a huge milestone and a
          turning point. It felt like everything I had worked toward was finally
          paying off.
        </p>
        <figure>
          <img
            src="./assets/images/cassie-the-cat.jpg"
            alt="Cassie the cat, looking very displeased."
            className="about-cassie-the-cat-image"
          ></img>
          <figcaption>Cassie looking very displeased.</figcaption>
        </figure>
      </div>
      <div className="about-section-container">
        <p>
          These days, I&apos;m more confident in my abilities. I know enough to
          feel like I belong in this field, but I&apos;m self-aware enough to
          realize I&apos;m still learning, and that&apos;s okay. Nobody knows
          everything, not even seasoned tech veterans.<br></br>
          <br></br>If I could give advice to my younger self, it would be to
          take it easy. Everyone learns at their own pace. It&apos;s okay to
          struggle or fall behind as long as you keep moving forward.
          Eventually, you&apos;ll get to where you&apos;re meant to be.
        </p>
        <figure>
          <img
            src="./assets/images/mario-me.png"
            alt="Noah Park-Nguyen dressed up as Mario eating a mushroom. Wahoo!"
            className="about-mario-me-image"
          ></img>
          <figcaption>Me as a Mario boy. Wahoo!</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default About;
