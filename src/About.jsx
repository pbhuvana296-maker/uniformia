import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function About() {
  return (
    <div>

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


      {/* ================= ABOUT PAGE ================= */}
      <section className="about-page">

        <div className="about-content">

          <div className="about-text">

            <p className="section-label">
              ABOUT UNIFORMIA
            </p>

            <h1>
              Quality Uniforms
              <br />
              <span>For Every Student</span>
            </h1>

            <p>
              Uniformia is dedicated to providing premium-quality
              school uniforms designed for comfort, durability and
              confidence.
            </p>

            <p>
              We understand that students wear uniforms every day.
              That's why we focus on comfortable fabrics, smart
              designs and reliable quality that can handle everyday
              school life.
            </p>

            <Link to="/uniforms" className="primary-btn">
              Explore Uniforms
            </Link>

          </div>


          <div className="about-image">
            <div className="about-image-box">
              <span>🎓</span>
              <h2>Uniformia</h2>
              <p>
                Smart • Comfortable • Durable
              </p>
            </div>
          </div>

        </div>


        {/* ================= FEATURES ================= */}
        <div className="about-features">

          <div className="about-feature-card">
            <div>👕</div>
            <h3>Premium Quality</h3>
            <p>
              Carefully selected materials for long-lasting
              school wear.
            </p>
          </div>

          <div className="about-feature-card">
            <div>💙</div>
            <h3>Student Comfort</h3>
            <p>
              Comfortable fabrics designed for active students.
            </p>
          </div>

          <div className="about-feature-card">
            <div>✨</div>
            <h3>Smart Style</h3>
            <p>
              Neat and stylish uniforms suitable for every school.
            </p>
          </div>

          <div className="about-feature-card">
            <div>🚚</div>
            <h3>Easy Ordering</h3>
            <p>
              Simple ordering for parents and students.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="about-cta">

        <h2>
          Ready to Choose the Perfect Uniform?
        </h2>

        <p>
          Explore our collection and place your order today.
        </p>

        <Link to="/order" className="primary-btn">
          Order Now
        </Link>

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

            <p>📞 +91 98735 37954</p>
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

    </div>
  );
}

export default About;
