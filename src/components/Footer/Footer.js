import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-line"></div>

      <div className="footer-links">

        <div>
          <h4>Company</h4>

          <p>Home</p>
          <p>Studio</p>
          <p>Service</p>
          <p>Blog</p>
        </div>

        <div>
          <h4>Terms & Policies</h4>

          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Explore</p>
          <p>Accessibility</p>
        </div>

        <div>
          <h4>Follow Us</h4>

          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>YouTube</p>
          <p>Twitter</p>
        </div>

        <div>
          <h4>Contact</h4>

          <p>1498W Elgin St, Ste</p>
          <p>2D Chicago, IL 63867</p>
          <p>123/345679000</p>
          <p>info@elementum.com</p>
        </div>

      </div>

      <div className="copyright">
        ©2023 Elementum. All rights reserved
      </div>

    </footer>
  );
}

export default Footer;