import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Form Section */}
        <div className="contact-form-section">
          <h2 className="contact-title">Contact Us</h2>

          {isSubmitted && (
            <div className="contact-success-message">
              <p>Your message has been sent successfully!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email" className="contact-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="contact-textarea"
              placeholder="Message"
              required
            />

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="contact-map-section">
          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Our Address</h3>
              <p>123 Trendsetter Avenue, Closet Kingdom, Fabric Land, 00789</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <h3>Email Us</h3>
              <p>info@fashionlifestyle.com</p>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <h3>Call Us</h3>
              <p> +123-456-789 </p>
            </div>
          </div>
          <h3 className="contact-map-title">Find us here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119058.58841736123!2d72.73412466464517!3d21.16907113429575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e11edf4b599%3A0xca498b99a5b2eb8f!2sShree%20Uttar%20Gujarat%20BBA%20%26%20BCA%20College!5e0!3m2!1sen!2sus!4v1725511916185!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="contact-map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
