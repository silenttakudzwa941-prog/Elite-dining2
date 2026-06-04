import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out to us for reservations,
            inquiries, or special events.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-info">

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+263 77 123 4567</p>
          </div>

          <div className="info-card">
            <h3>✉️ Email</h3>
            <p>info@elitedining.com</p>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>123 Samora Machel Avenue, Harare</p>
          </div>

          <div className="info-card">
            <h3>🕒 Opening Hours</h3>
            <p>Mon - Thu: 10AM - 10PM</p>
            <p>Fri - Sun: 10AM - 12AM</p>
          </div>

        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
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
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>

          {success && (
            <div className="success-message">
              ✅ Message sent successfully! We will get back to you shortly.
            </div>
          )}
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Elite Dining Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.697713530852!2d31.0530286!3d-17.8292205!2m3!1f0!2f0!3f0!"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;