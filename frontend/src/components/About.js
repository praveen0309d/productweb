import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb} from 'lucide-react';
import video1 from "../videos/video1.mp4";

const AboutFeature = ({ icon, title, text, delay, animationClass }) => {
    return (
        <div className={`about-feature ${animationClass}`} style={{ animationDelay: `${delay}s` }}>
            <div className="about-feature-icon">
                {icon}
            </div>
            <div className="about-feature-content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);

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

    return (
        <div className="about-page" id="about">
            {/* Hero / Intro Section */}
            <section className="about-intro" ref={sectionRef}>
                <div className="container">
                    <div className="about-grid">
                        <div className={`about-text ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
                            <h2>About <span>JPN Cloud Solutions</span></h2>
                            <p className="lead">
                                We help businesses design, deploy, and manage secure and scalable cloud infrastructure.
                            </p>
                            <p>
                                Our team of certified cloud architects brings years of experience in migrating legacy
                                systems, optimizing ongoing operations, and building resilient cloud-native applications.
                                We understand that every business is unique, which is why we provide tailored solutions
                                that align with your specific goals and technical requirements.
                            </p>
                            <div className="platforms-supported">
                                <h4>Major Platforms Supported</h4>
                                <div className="brands">
                                    <span>AWS</span>
                                    <span>Azure</span>
                                    <span>Google Cloud</span>
                                </div>
                            </div>
                        </div>
                        <div className={`about-illustration ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
                            <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyItems: 'center', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)', padding: '2rem' }}>
                                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                    <rect x="50" y="50" width="300" height="200" rx="16" fill="var(--color-bg)" />
                                    <rect x="80" y="80" width="240" height="140" rx="8" fill="white" stroke="var(--color-primary)" strokeWidth="2" />
                                    <circle cx="200" cy="150" r="40" fill="rgba(37, 99, 235, 0.1)" stroke="var(--color-secondary)" strokeWidth="4" />
                                    <circle cx="200" cy="150" r="20" fill="var(--color-accent)" className="pulse" />
                                    <path d="M110 150 L160 150" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
                                    <path d="M240 150 L290 150" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
                                    <path d="M200 110 L200 60" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
                                    <path d="M200 190 L200 240" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
                                    <circle cx="110" cy="150" r="8" fill="var(--color-primary)" />
                                    <circle cx="290" cy="150" r="8" fill="var(--color-primary)" />
                                    <circle cx="200" cy="60" r="8" fill="var(--color-primary)" />
                                    <circle cx="200" cy="240" r="8" fill="var(--color-primary)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="about-video bg-gray">
                <div className="container">
                    <div className="video-header text-center">
                        <h2>See How JPN Cloud Solutions Works</h2>
                        <p>Watch a quick overview of how our cloud infrastructure solutions help businesses build reliable and scalable systems.</p>
                    </div>

                    <div className="video-container-wrapper">
                        <div className="video-card">
                            <div className="video-placeholder" style={{ backgroundColor: 'black' }}>
                                <video
                                    src={video1}
                                    controls
                                    className="video-thumbnail"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    poster="https://imgs.search.brave.com/4IpikfpQO9c7ZhSWriCWihpwBvI-dBksLDn2cDjfswk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NjMyLzQ2Ny9zbWFs/bC9jbG91ZC1zZXJ2/ZXItY29uY2VwdC1w/aG90by5qcGc"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision">
                <div className="container">
                    <div className="mv-grid">
                        <AboutFeature
                            icon={<Target size={40} />}
                            title="Our Mission"
                            text="Our mission is to help businesses leverage modern cloud technologies to build reliable, secure, and scalable infrastructure that supports innovation and growth."
                            delay={0.1}
                            animationClass="animate-slide-up"
                        />
                        <AboutFeature
                            icon={<Lightbulb size={40} />}
                            title="Our Vision"
                            text="Our vision is to become a trusted cloud technology partner that enables organizations to transform their digital infrastructure through modern cloud solutions."
                            delay={0.3}
                            animationClass="animate-fade-in"
                        />
                    </div>
                </div>
            </section>
            <style dangerouslySetInnerHTML={{
                __html: `
        .opacity-0 { opacity: 0; }
        .pulse { animation: pulse-glow 2s infinite; }
      `}} />
        </div>
    );
};

export default AboutUs;
