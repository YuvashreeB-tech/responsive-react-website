import "./Features.css";

function Features() {
  return (
    <section className="features">

      <div className="frame1">

        <div className="body-a">
          <h2>
            Tomorrow should
            <br />
            be better than today
          </h2>
          <div className="frame1-scribble">
           <span className="frame1-scribble-1"></span>
<span className="frame1-scribble-2"></span>
<span className="frame1-scribble-3"></span>
<span className="frame1-scribble-4"></span>
          </div>



          <p>
            We are a team of strategists, designers, communicators, researchers.
            <br />
            Together, we believe that progress happens when you refuse
            <br />
            to play things safe.
          </p>

          <a href="/">Read more</a>
        </div>

        <div className="pink-glow"></div>

        <div className="image-a">

          <div className="pink-box"></div>

          <img
            src="/images/Features/Frame1.png"
            alt="Frame 1"
            className="Frame1-image"
          />

        </div>
      </div>

      

      <img
        src="/images/vectors/redcurve1.png"
        alt="curve"
        className="red-curve-1"
      />

      

      <div className="frame2">

        <div className="image-b">

          <div className="triangle-top"></div>

          <img
            src="/images/Features/Frame2.png"
            alt="Frame 2"
            className="Frame2-image"
          />

          <div className="triangle-bottom"></div>

        </div>

        <div className="body-b">
          <h2>
            <span className="underline">See</span> how we can
            <br />
            help you progress
            <br />
          </h2>

          <p>
            We add a layer of fearless insights
            and action that allows change
            <br />
            makers to accelerate their progress in areas
            such as brand, design,
            <br />
            digital comms
            and social research.
          </p>

          <a href="/">Read more</a>
        </div>

      </div>

      

      <img
        src="/images/vectors/redcurve2.png"
        alt="curve"
        className="red-curve-2"
      />

    </section>
  );
}

export default Features;