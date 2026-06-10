import "./Offer.css";

function Offer() {
  return (
    <section className="offer">

      <div className="offer-header">
        <h2>
          What we <span className="Offer-green-highlight">can</span>
          <br />
          offer you!
        </h2>
      <div className="Offer-scribble">
        <span className="offer-scribble-1"></span>
        <span className="offer-scribble-2"></span>
        <span className="offer-scribble-3"></span>
        <span className="offer-scribble-4"></span>
      </div>

      </div>



      <div className="offer-list">

        <div className="offer-item">
          <p className="offer-small">
            Office of multiple
            <br />
            interest content
          </p>

          <h3>Collaborative & partnership</h3>

          <span>→</span>
        </div>

        <div className="offer-item">
          <p className="offer-small">
            The hanger US Air force
            <br />
            digital experimental
          </p>

          <h3>We talk about our weight</h3>

          <span>→</span>
        </div>

        <div className="offer-item">
          <p className="offer-small">
            Delta faucet content,
            <br />
            social, digital
          </p>

          <h3>Piloting digital confidence</h3>

          <span>→</span>
        </div>

      </div>

    </section>
  );
}

export default Offer;