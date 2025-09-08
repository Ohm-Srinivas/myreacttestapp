import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  // 🟢 THIS IS THE VALID return inside the component:
  return (
    <div className="contact-form-wrapper">
      <div className="contact-form">
        <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-8">Contact Us</h2>

        {isSubmitted && (
          <div className="success-message">
            ✅ Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name"/>
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div>
            <label>Email ID:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@domain.com"/>
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div>
            <label>Subject:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What’s this about?"/>
            {errors.subject && <p className="error-text">{errors.subject}</p>}
          </div>

          <div>
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..."/>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <button type="submit" className="contact-btn">🚀 Send Message</button>
        </form>
      </div>
    </div>
  );
};

// ✅ Export the component
export default ContactUs;
