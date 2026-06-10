import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>
        The thinkers and
        <br />
        doers were ch<span className="hero-pink-highlight">anging</span>
        <br />
        the <span className="hero-green-highlight">status</span> Quo with
      </h1>

      <p className="hero-description">
        We are a team of strategists, communicators, researchers.
        Together, we believe that progress comes when you refuse to
        play things safe.
      </p>

      <div className="hero-scribble">
        <span className="scribble-1"></span>
        <span className="scribble-2"></span>
        <span className="scribble-3"></span>
        <span className="scribble-4"></span>
      </div>
      <div className="hero-purple-shape"></div>

      <div className="people-section">
        <img src="/images/Hero/person1.png" alt="person1" className="person person1" />
        <img src="/images/Hero/person2.png" alt="person2" className="person person2" />
        <img src="/images/Hero/person3.png" alt="person3" className="person person3" />
        <img src="/images/Hero/person4.png" alt="person4" className="person person4" />
        <img src="/images/Hero/person5.png" alt="person5" className="person person5" />
        <img src="/images/Hero/person6.png" alt="person6" className="person person6" />
        <img src="/images/Hero/person7.png" alt="person7" className="person person7" />
        <img src="/images/Hero/person8.png" alt="person8" className="person person8" />
      </div>



      <img
        src="/images/vectors/orangeline.png"
        alt="orange line"
        className="orange-line"
      />

      <img
        src="/images/vectors/blackline.png"
        alt="black line"
        className="black-line"
      />



    </section>
  );
}

export default Hero;