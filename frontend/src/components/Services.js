import React, { useEffect, useRef, useState } from 'react';
import { Cloud, Server, Activity, Shield, DollarSign, Bot } from 'lucide-react';

const ServiceCard = ({ icon, title, description, delay }) => {
    return (
        <div className="service-card animate-slide-up" style={{ animationDelay: `${delay}s` }}>
            <div className="service-icon">
                {icon}
            </div>
            <div className="service-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Services = () => {
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

    return (
        <section id="services" className="services" ref={sectionRef}>
            <div className="container">
                <div className={`services-header ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h2>Our Cloud Services</h2>
                    <p>
                        We help businesses build, manage, and optimize secure cloud infrastructure using modern cloud technologies.
                    </p>
                </div>

                {isVisible && (
                    <div className="services-grid">
                        <ServiceCard
                            icon={<Cloud size={32} />}
                            title="Cloud Infrastructure Management"
                            description="Manage and maintain scalable cloud environments with high availability, performance monitoring, and automated infrastructure management."
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={<Server size={32} />}
                            title="Cloud Setup & Migration"
                            description="Design and deploy cloud architecture and seamlessly migrate existing applications and workloads to the cloud with minimal downtime."
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={<Activity size={32} />}
                            title="Cloud Monitoring"
                            description="24/7 monitoring of cloud systems to detect performance issues, ensure uptime, and maintain optimal infrastructure health."
                            delay={0.3}
                        />
                        <ServiceCard
                            icon={<Shield size={32} />}
                            title="Security & Compliance"
                            description="Implement strong security practices including access control, encryption, firewall management, and compliance monitoring to protect cloud systems."
                            delay={0.4}
                        />
                        <ServiceCard
                            icon={<DollarSign size={32} />}
                            title="Cost Optimization"
                            description="Analyze and optimize cloud resource usage to reduce infrastructure costs and improve operational efficiency."
                            delay={0.5}
                        />
                        <ServiceCard
                            icon={<Bot size={32} />}
                            title="AI Monitoring System"
                            description="AI-powered monitoring system to reduce human error, save time, and preemptively detect infrastructure anomalies before they happen."
                            delay={0.6}
                        />
                    </div>
                )}

                <div className={`services-platforms ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <h3>Supported Cloud Platforms</h3>
                    <div className="platforms-list">
                        <span className="platform-tag">Amazon Web Services</span>
                        <span className="platform-tag">Microsoft Azure</span>
                        <span className="platform-tag">Google Cloud</span>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `.opacity-0 { opacity: 0; }` }} />
        </section>
    );
};

export default Services;
