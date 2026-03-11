import React, { useEffect, useRef, useState } from 'react';
import { Server, Activity, ArrowUpRight, Shield } from 'lucide-react';

const BenefitCard = ({ icon, title, description, delay }) => {
    return (
        <div className="benefit-card animate-slide-up" style={{ animationDelay: `${delay}s` }}>
            <div className="benefit-icon">
                {icon}
            </div>
            <div className="benefit-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Benefits = () => {
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
        <section id="solutions" className="benefits" ref={sectionRef}>
            <div className="container">
                <div className={`benefits-header ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h2>Why Choose JPN Cloud Solutions</h2>
                </div>

                {isVisible && (
                    <div className="benefits-grid">
                        <BenefitCard
                            icon={<Server size={28} />}
                            title="Reliable Infrastructure"
                            description="Ensure stable and highly available cloud systems."
                            delay={0.1}
                        />
                        <BenefitCard
                            icon={<Activity size={28} />}
                            title="24/7 Monitoring"
                            description="Continuous monitoring and proactive issue detection."
                            delay={0.2}
                        />
                        <BenefitCard
                            icon={<ArrowUpRight size={28} />}
                            title="Scalable Systems"
                            description="Infrastructure that grows with your business needs."
                            delay={0.3}
                        />
                        <BenefitCard
                            icon={<Shield size={28} />}
                            title="Strong Security"
                            description="Protect your applications and data with modern cloud security."
                            delay={0.4}
                        />
                    </div>
                )}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `.opacity-0 { opacity: 0; }` }} />
        </section>
    );
};

export default Benefits;
