import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial">

      <h2>
        <span className="green-highlight">What</span> our customer
        <br />
        says About Us
      </h2>

      <div className="About-scribble">
        <span className="scribble-1"></span>
        <span className="scribble-2"></span>
        <span className="scribble-3"></span>
        <span className="scribble-4"></span>
      </div>

      <div className="testimonial-card">

        <div className="quote-top">❝</div>

        <p>
          Elementum delivered the site with inthe timeline
          <br />
          as they requested. In the end, the client found a
          50%
          <br />
          increase in traffic within days since its launch.
          They
          <br />
          also had an impressive ability to use technologies
          that
          <br />
          the company hasn't used, which have also proved
          to
          <br />
          be easy to use and reliable.
        </p>

        <div className="quote-bottom">❞</div>

      </div>

      <div className="testimonial-images">
        <img src="/images/Testimonial/person1.png" alt="" className="t1" />
        <img src="/images/Testimonial/person2.png" alt="" className="t2" />
        <img src="/images/Testimonial/person3.png" alt="" className="t3" />
        <img src="/images/Testimonial/person4.png" alt="" className="t4" />

        <img src="/images/Testimonial/person5.png" alt="" className="t5" />
        <img src="/images/Testimonial/person6.png" alt="" className="t6" />
        <img src="/images/Testimonial/person7.png" alt="" className="t7" />
        <img src="/images/Testimonial/person8.png" alt="" className="t8" />
      </div>

    </section>
  );
}

export default Testimonial;