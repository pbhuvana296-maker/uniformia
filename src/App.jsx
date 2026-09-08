import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Pages
import Uniforms from "./Uniforms";
import Accessories from "./Accessories";
import About from "./About";
import Contact from "./Contact";
import Order from "./Order";

// Images
import hero from "./assets/image/hero.jpg";
import shirt from "./assets/image/shirt.jpg";
import trouser from "./assets/image/trouser.jpg";
import accessories from "./assets/image/accessories.jpg";


// =====================================================
// HOME PAGE
// =====================================================

function Home() {

  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "School Shirt",
      price: "₹499",
      image: shirt,
      description:
        "Comfortable and premium quality school shirt.",
    },
    {
      id: 2,
      name: "School Trouser",
      price: "₹699",
      image: trouser,
      description:
        "Smart and durable school trouser for students.",
    },
    {
      id: 3,
      name: "School Uniform Set",
      price: "₹1,099",
      image: hero,
      description:
        "Complete school uniform set for everyday wear.",
    },
    {
      id: 4,
      name: "Uniform Accessories",
      price: "₹399",
      image: accessories,
      description:
        "Essential accessories to complete the uniform.",
    },
  ];

  const addToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          🎓 Uniformia
        </div>

        <div className="nav-links">

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

        <Link
          to="/order"
          className="cart-btn"
        >
          🛒 Cart <span>{cartCount}</span>
        </Link>

      </nav>


      {/* ================= HERO ================= */}

      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >

        <div className="hero-overlay">

          <div className="hero-content">

            <p className="hero-small">
              WELCOME TO UNIFORMIA
            </p>

            <h1>
              Smart Uniforms.
              <br />
              <span>
                Confident Students.
              </span>
            </h1>

            <p>
              Discover premium school uniforms designed
              for comfort, quality and confidence.
            </p>

            <div className="hero-buttons">

              <Link
                to="/uniforms"
                className="primary-btn"
              >
                Shop Uniforms →
              </Link>

              <Link
                to="/contact"
                className="secondary-btn"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="feature-card">

          <div className="feature-icon">
            ✨
          </div>

          <h3>
            Premium Quality
          </h3>

          <p>
            High quality fabrics made for everyday
            school wear.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            👕
          </div>

          <h3>
            Comfortable Fit
          </h3>

          <p>
            Comfortable designs for active students.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            🚚
          </div>

          <h3>
            Fast Delivery
          </h3>

          <p>
            Easy ordering and convenient delivery.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            💯
          </div>

          <h3>
            Best Value
          </h3>

          <p>
            Quality uniforms at affordable prices.
          </p>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-section">

        <div className="about-image">

          <img
            src={shirt}
            alt="School Shirt"
          />

        </div>


        <div className="about-content">

          <p className="section-label">
            ABOUT UNIFORMIA
          </p>

          <h2>
            Everything Students Need
            <br />
            <span>
              For A Smart School Look
            </span>
          </h2>

          <p>
            Uniformia provides quality school uniforms
            designed with comfort, durability and style
            in mind.
          </p>

          <p>
            From school shirts and trousers to accessories,
            we make school shopping simple and convenient.
          </p>

          <Link
            to="/uniforms"
            className="dark-btn"
          >
            Explore Collection →
          </Link>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section
        className="products-section"
        id="uniforms"
      >

        <div className="section-heading">

          <p className="section-label">
            OUR COLLECTION
          </p>

          <h2>
            Featured Uniforms
          </h2>

          <p>
            Explore our popular school uniform collection.
          </p>

        </div>


        <div className="products-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.description}
                </p>


                <div className="product-bottom">

                  <span className="price">
                    {product.price}
                  </span>

                  <button
                    className="add-btn"
                    onClick={addToCart}
                  >
                    Add to Cart 🛒
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= ACCESSORIES ================= */}

      <section
        className="accessories-section"
        id="accessories"
      >

        <div className="accessories-content">

          <p className="section-label">
            COMPLETE THE LOOK
          </p>

          <h2>
            School
            <br />
            <span>
              Accessories
            </span>
          </h2>

          <p>
            Complete your school uniform with essential
            accessories for everyday school life.
          </p>

          <button
            className="primary-dark-btn"
            onClick={addToCart}
          >
            Add Accessories 🛒
          </button>

        </div>


        <div className="accessories-image">

          <img
            src={accessories}
            alt="School Accessories"
          />

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-section">

        <div className="section-heading">

          <p className="section-label">
            WHY UNIFORMIA
          </p>

          <h2>
            Made For School Life
          </h2>

          <p>
            Quality, comfort and style in every uniform.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">

            <div>
              🧵
            </div>

            <h3>
              Quality Fabric
            </h3>

            <p>
              Carefully selected fabrics for long-lasting
              comfort and durability.
            </p>

          </div>


          <div className="why-card">

            <div>
              📏
            </div>

            <h3>
              Perfect Fit
            </h3>

            <p>
              Smart and comfortable fits designed for students.
            </p>

          </div>


          <div className="why-card">

            <div>
              💰
            </div>

            <h3>
              Affordable Prices
            </h3>

            <p>
              Premium quality uniforms at affordable prices.
            </p>

          </div>


          <div className="why-card">

            <div>
              🤝
            </div>

            <h3>
              Trusted Service
            </h3>

            <p>
              Friendly support whenever you need us.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div className="cta-content">

          <p className="section-label">
            READY FOR SCHOOL?
          </p>

          <h2>
            Dress Smart.
            <br />
            <span>
              Feel Confident.
            </span>
          </h2>

          <p>
            Shop quality school uniforms from Uniformia.
          </p>

          <Link
            to="/uniforms"
            className="cta-btn"
          >
            Start Shopping →
          </Link>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-info">

          <p className="section-label">
            CONTACT US
          </p>

          <h2>
            Need Help With
            <br />
            <span>
              Your Uniform?
            </span>
          </h2>

          <p>
            Contact Uniformia for sizes, school requirements,
            bulk orders and product information.
          </p>

          <div className="contact-details">

            <p>
              📍 Tamil Nadu, India
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <p>
              ✉️ hello@uniformia.com
            </p>

          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Thank you! We will contact you soon."
            );
          }}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">


          {/* FOOTER BRAND */}

          <div className="footer-brand">

            <h2>
              🎓 Uniformia
            </h2>

            <p>
              Quality school uniforms designed for comfort,
              confidence and everyday school life.
            </p>

          </div>


          {/* FOOTER LINKS */}

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


          {/* FOOTER CONTACT */}

          <div className="footer-contact">

            <h3>
              Contact
            </h3>

            <p>
              📍 Tamil Nadu, India
            </p>

            <p>
              📞 +91 98735 37954
            </p>

            <p>
              ✉️ hello@uniformia.com
            </p>

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


// =====================================================
// APP + ROUTES
// =====================================================

function App() {

  return (

    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* UNIFORMS */}
      <Route
        path="/uniforms"
        element={<Uniforms />}
      />

      {/* ACCESSORIES */}
      <Route
        path="/accessories"
        element={<Accessories />}
      />

      {/* ABOUT */}
      <Route
        path="/about"
        element={<About />}
      />

      {/* CONTACT */}
      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* ORDER */}
      <Route
        path="/order"
        element={<Order />}
      />

    </Routes>

  );
}

export default App;

