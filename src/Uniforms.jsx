import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import shirt from "./assets/image/shirt.jpg";
import trouser from "./assets/image/trouser.jpg";
import hero from "./assets/image/hero.jpg";

function Uniforms() {
  const uniforms = [
    {
      name: "School Shirt",
      price: "₹499",
      image: shirt,
      text: "Premium cotton school shirt with a comfortable fit.",
    },
    {
      name: "School Trouser",
      price: "₹699",
      image: trouser,
      text: "Smart and durable trousers designed for students.",
    },
    {
      name: "School Skirt",
      price: "₹649",
      image: hero,
      text: "Comfortable school skirt with a neat and stylish finish.",
    },
    {
      name: "Complete Uniform",
      price: "₹1,099",
      image: hero,
      text: "A complete uniform collection for everyday school life.",
    },
  ];

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          🎓 Uniformia
        </div>

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


      {/* ================= UNIFORMS PAGE ================= */}

      <section className="uniforms-page">

        <div className="uniforms-header">

          <p className="section-label">
            OUR COLLECTION
          </p>

          <h1>
            School <span>Uniforms</span>
          </h1>

          <h3>
            Smart • Comfortable • Durable
          </h3>

          <p>
            Explore our premium collection of school uniforms
            designed for everyday comfort and confidence.
          </p>

        </div>


        {/* ================= PRODUCT GRID ================= */}

        <div className="uniforms-grid">

          {uniforms.map((item) => (

            <div className="uniform-card" key={item.name}>

              <div className="uniform-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>


              <div className="uniform-details">

                <h2>
                  {item.name}
                </h2>

                <p>
                  {item.text}
                </p>


                <div className="uniform-bottom">

                  <strong>
                    {item.price}
                  </strong>

                  <Link to="/order">
                    <button>
                      Order Now 🛒
                    </button>
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">


          {/* BRAND */}

          <div className="footer-brand">

            <h2>
              🎓 Uniformia
            </h2>

            <p>
              Quality school uniforms and accessories
              made for comfort, confidence and style.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-links">

            <h3>
              Quick Links
            </h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/uniforms">
              Uniforms
            </Link>

            <Link to="/accessories">
              Accessories
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          {/* CONTACT */}

          <div className="footer-contact">

            <h3>
              Contact
            </h3>

            <p>
                          📞 +91 98735 37954

            </p>

            <p>
              📧 schoolwear@example.com
            </p>

            <p>
              📍 Chennai, Tamil Nadu
            </p>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="footer-bottom">

          <p>
            © 2026 Uniformia. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Uniforms;
