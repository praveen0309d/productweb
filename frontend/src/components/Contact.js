import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section id="contact" className="contact-section" ref={sectionRef}>
            <div className="container">
                <div className={`contact-header ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h2>Contact JPN Cloud Solutions</h2>
                    <p>
                        Have questions about cloud infrastructure or need help with your cloud environment? Our team is here to help.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className={`contact-info-container ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
                        <div className="contact-info-cards">
                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4>Email Us</h4>
                                    <a href="mailto:support@jpncloudsolutions.com" className="contact-link">support@jpncloudsolutions.com</a>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>24/7 Available</p>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4>Office Location</h4>
                                    <p>No-10 Pallawan Salai<br />Chennai,Pin code-600066</p>
                                </div>
                            </div>
                        </div>

                        <div className="consultation-card">
                            <div className="consultation-icon">
                                <Calendar size={32} />
                            </div>
                            <h3>Schedule a Cloud Consultation</h3>
                            <p>Speak with our cloud experts to discuss infrastructure management, migration, monitoring, and optimization solutions.</p>
                            <button className="btn btn-primary consultation-btn">
                                Book Consultation <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    <div className={`contact-form-container ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Send us a message</h3>

                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Praveen" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="praveen@company.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" placeholder="Company Inc." />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="How can we help?" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Tell us about your cloud infrastructure needs..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `.opacity-0 { opacity: 0; }` }} />
        </section>
    );
};

export default Contact;
