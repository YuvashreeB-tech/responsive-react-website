import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-content">


        <img
          src="/images/Newsletter/arrow1.png"
          alt="arrow"
          className="newsletter-arrow-1"
        />

        <img
          src="/images/Newsletter/arrow2.png"
          alt="arrow"
          className="newsletter-arrow-2"
        />

        <div className="newsletter-purple-shape"></div>

        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p>
          To make your stay special and even more memorable
        </p>

        <button>Subscribe Now</button>

      </div>

    </section>
  );
}

export default Newsletter;