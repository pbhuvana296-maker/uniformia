import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import accessories from "./assets/image/accessories.jpg";
import shoes from "./assets/image/shoes.jpg";

function Accessories() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🎓 Uniformia</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/uniforms">Uniforms</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link to="/order" className="nav-order-btn">
          Order Now
        </Link>
      </nav>

      {/* PAGE */}
      <section className="accessories-page">

        <div className="accessories-header">
          <p className="section-label">OUR COLLECTION</p>

          <h1>
            School <span>Accessories</span>
          </h1>

          <h3>Smart • Comfortable • Reliable</h3>

          <p>
            Complete your school uniform with our quality
            accessories and footwear.
          </p>
        </div>

        <div className="accessories-grid">

          {/* ACCESSORIES */}
          <div className="accessory-card">
            <div className="accessory-image">
              <img src={accessories} alt="School Accessories" />
            </div>

            <div className="accessory-details">
              <h2>School Accessories</h2>

              <p>
                Essential accessories designed for everyday
                school needs.
              </p>

              <div className="accessory-bottom">
                <strong>₹299</strong>

                <Link to="/order">
                  <button>Order Now 🛒</button>
                </Link>
              </div>
            </div>
          </div>

          {/* SHOES */}
          <div className="accessory-card">
            <div className="accessory-image">
              <img src={shoes} alt="School Shoes" />
            </div>

            <div className="accessory-details">
              <h2>School Shoes</h2>

              <p>
                Comfortable and durable school shoes for
                everyday school use.
              </p>

              <div className="accessory-bottom">
                <strong>₹899</strong>

                <Link to="/order">
                  <button>Order Now 🛒</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-content">

          <div className="footer-brand">
            <h2>🎓 Uniformia</h2>
            <p>
              Quality school uniforms and accessories made
              for comfort and confidence.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/uniforms">Uniforms</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
              <p>              📞 +91 98735 37954
</p>
            <p>📧 schoolwear@example.com</p>
            <p>📍 Chennai, Tamil Nadu</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Uniformia. All Rights Reserved.</p>
        </div>

      </footer>

    </div>
  );
}

export default Accessories;
