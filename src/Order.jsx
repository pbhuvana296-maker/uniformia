import React, { useState } from "react";
import "./App.css";

function Order() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="order-page">

      <div className="order-container">

        <div className="order-info">
          <p className="section-label">UNIFORMIA ORDERS</p>

          <h1>
            Place Your
            <br />
            <span>Uniform Order</span>
          </h1>

          <p>
            Fill in your details and tell us which school
            uniform products you need.
          </p>

          <div className="order-benefits">
            <div>✓ Easy Ordering</div>
            <div>✓ Quality Uniforms</div>
            <div>✓ Multiple Sizes Available</div>
            <div>✓ Quick Support</div>
          </div>
        </div>

        <div className="order-form-box">

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>

              <h2>Order Received!</h2>

              <p>
                Thank you for choosing Uniformia.
                We will contact you shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <h2>Order Details</h2>

              <input
                type="text"
                placeholder="Student Name"
                required
              />

              <input
                type="text"
                placeholder="Parent / Guardian Name"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <select required defaultValue="">
                <option value="" disabled>
                  Select Uniform
                </option>
                <option>School Shirt</option>
                <option>School Trouser</option>
                <option>School Skirt</option>
                <option>School Blazer</option>
                <option>Complete Uniform Set</option>
                <option>Accessories</option>
              </select>

              <select required defaultValue="">
                <option value="" disabled>
                  Select Size
                </option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
                <option>XXL</option>
              </select>

              <input
                type="number"
                min="1"
                placeholder="Quantity"
                required
              />

              <textarea
                rows="4"
                placeholder="Delivery Address"
                required
              ></textarea>

              <button type="submit">
                Place Order →
              </button>

            </form>
          )}

        </div>

      </div>

    </section>
  );
}

export default Order;