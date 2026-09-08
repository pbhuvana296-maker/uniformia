import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Contact() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          Uniformia
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/uniforms">Uniforms</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link to="/order" className="cart-btn">
          🛒 Order Now
        </Link>

      </nav>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-page">

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h1>
              Contact <span>Us</span>
            </h1>

            <p>
              Have questions about uniforms, sizes or orders?
              We are happy to help you.
            </p>

            <div className="contact-item">
              <span>📞</span>

              <div>
                <h3>Phone</h3>
                <p>              📞 +91 98735 37954
</p>
              </div>
            </div>

            <div className="contact-item">
              <span>✉️</span>

              <div>
                <h3>Email</h3>
                <p>schoolwear@example.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>

              <div>
                <h3>Location</h3>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been sent.");
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message ✉️
            </button>

          </form>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-box">
            <h2>Uniformia</h2>

            <p>
              Quality school uniforms designed for comfort,
              confidence and everyday school life.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/uniforms">Uniforms</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>

            <p>              📞 +91 98735 37954
</p>
            <p>✉️ schoolwear@example.com</p>
            <p>📍 Chennai, Tamil Nadu</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Uniformia. All Rights Reserved.
          </p>
        </div>

      </footer>
    </>
  );
}

export default Contact;
