// components/Contact.js - Modified to work with hosted backend
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });
  
  // The URL of your deployed backend service
  const API_URL = process.env.REACT_APP_API_URL || 'https://portfolio-contact-form-omega.vercel.app/api/contact';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill all required fields.',
        loading: false
      });
      
      setTimeout(() => setFormStatus(prev => ({ ...prev, error: false })), 3000);
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.',
        loading: false
      });
      
      setTimeout(() => setFormStatus(prev => ({ ...prev, error: false })), 3000);
      return;
    }
    
    try {
      // Show loading state
      setFormStatus({
        submitted: false,
        error: false,
        message: '',
        loading: true
      });
      
      // Send data to backend API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.status === 429) {
        // Rate limit exceeded
        setFormStatus({
          submitted: false,
          error: true,
          message: 'Too many messages sent. Please try again later.',
          loading: false
        });
        
        setTimeout(() => setFormStatus(prev => ({ ...prev, error: false })), 5000);
        return;
      }
      
      if (data.success) {
        // Show success message
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          loading: false
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => setFormStatus(prev => ({ ...prev, submitted: false })), 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      setFormStatus({
        submitted: false,
        error: true,
        message: error.message || 'Failed to send message. Please try again later.',
        loading: false
      });
      
      setTimeout(() => setFormStatus(prev => ({ ...prev, error: false })), 3000);
    }
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info scroll-animation">
            <div className="contact-card">
              <div className="contact-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/location.svg`}
                  alt="Location Icon"
                  className="location-icon"
                  style={{ width: '21px', height: '21px' }}
                />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Haram, Giza, Egypt</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/email.svg`}
                  alt="Email Icon"
                  className="email-icon"
                  style={{ width: '21px', height: '21px' }} 
                />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>ahmed.moustafa9813@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/phone.svg`}
                  alt="Phone Icon"
                  className="phone-icon"
                  style={{ width: '21px', height: '21px' }} 
                />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+20 1091145763</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container scroll-animation">
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.submitted && (
                <div className="form-message success">
                  {formStatus.message}
                </div>
              )}
              
              {formStatus.error && (
                <div className="form-message error">
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formStatus.loading}
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formStatus.loading}
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={formStatus.loading}
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message *" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={formStatus.loading}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn submit-btn ${formStatus.loading ? 'loading' : ''}`}
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;