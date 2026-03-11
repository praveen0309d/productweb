import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="network-bg">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="network" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="2" fill="var(--color-secondary)" opacity="0.5" />
                            <path d="M50 50 L150 150 M50 50 L-50 150 M50 50 L150 -50" stroke="var(--color-secondary)" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#network)" />
                </svg>
            </div>

            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <div className="container">
                <div className="hero-content" id="home">
                    <h1 className={isVisible ? "animate-fade-in delay-100" : "opacity-0"}>
                        Reliable Cloud Infrastructure Management
                        <span>for Modern Businesses</span>
                    </h1>
                    <p className={isVisible ? "animate-fade-in delay-200" : "opacity-0"}>
                        JPN Cloud Solutions helps companies deploy, manage, and optimize secure cloud infrastructure so they can scale efficiently and confidently.
                    </p>
                    <div className={`hero-buttons ${isVisible ? "animate-slide-up delay-300" : "opacity-0"}`}>
                        <button className="btn btn-primary">
                            <a href="http://squarebrothers.com/" style={{ marginLeft: '8px', fontSize: '0.9em' }}>Get Started</a>
                        </button>
                        <button className="btn btn-secondary">Book Consultation</button>
                    </div>
                </div>

                <div className={`hero-illustration ${isVisible ? "animate-fade-in delay-400" : "opacity-0"}`}>
                    <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="50" y="150" width="400" height="60" rx="10" fill="white" stroke="var(--color-secondary)" strokeWidth="2" />
                            <circle cx="100" cy="180" r="10" fill="var(--color-accent)" className="pulse" />
                            <circle cx="140" cy="180" r="10" fill="#E2E8F0" />
                            <circle cx="180" cy="180" r="10" fill="#E2E8F0" />

                            <rect x="50" y="240" width="400" height="60" rx="10" fill="white" stroke="var(--color-secondary)" strokeWidth="2" />
                            <circle cx="100" cy="270" r="10" fill="var(--color-accent)" className="pulse" />
                            <circle cx="140" cy="270" r="10" fill="#E2E8F0" />
                            <circle cx="180" cy="270" r="10" fill="#E2E8F0" />

                            <path d="M250 150 L250 100" stroke="var(--color-secondary)" strokeWidth="4" strokeDasharray="5 5" />
                            <path d="M150 150 L150 100" stroke="var(--color-secondary)" strokeWidth="4" strokeDasharray="5 5" />
                            <path d="M350 150 L350 100" stroke="var(--color-secondary)" strokeWidth="4" strokeDasharray="5 5" />

                            <path d="M250 80 Q 250 40 300 40 Q 320 10 360 20 Q 400 30 380 70 Q 390 100 340 100 Q 250 100 250 80" fill="rgba(37, 99, 235, 0.1)" />
                            <path d="M150 80 Q 150 40 100 40 Q 80 10 40 20 Q 0 30 20 70 Q 10 100 60 100 Q 150 100 150 80" fill="rgba(6, 182, 212, 0.1)" />
                        </svg>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .pulse { animation: pulse-glow 2s infinite; }
        .opacity-0 { opacity: 0; }
      `}} />
        </section>
    );
};

export default Hero;
