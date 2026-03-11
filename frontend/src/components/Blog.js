import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ image, category, title, description, meta, delay }) => {
    return (
        <article className="blog-card animate-slide-up" style={{ animationDelay: `${delay}s` }}>
            <div className="blog-image-wrapper">
                <img src={image} alt={title} className="blog-image" />
                <span className="blog-category">{category}</span>
            </div>
            <div className="blog-content">
                <div className="blog-meta">{meta}</div>
                <h3 className="blog-title">{title}</h3>
                <p className="blog-description">{description}</p>
                {/* <a href="#read-more" className="blog-link">
                    Read More <ArrowRight size={16} />
                </a> */}
            </div>
        </article>
    );
};

const Blog = () => {
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

    const blogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Cloud Best Practices",
            title: "Best Practices for Managing Cloud Infrastructure",
            description: "Learn how to design secure, scalable, and reliable cloud environments for modern applications.",
            meta: "By Nandish • Mar 11, 2026",
            delay: 0.1
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "DevOps Guides",
            title: "How DevOps Improves Cloud Infrastructure Management",
            description: "Discover how DevOps automation and continuous deployment improve cloud performance and reliability.",
            meta: "By Praveen D • Mar 11, 2026",
            delay: 0.2
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Infrastructure Tips",
            title: "5 Tips for Optimizing Your Cloud Infrastructure Costs",
            description: "Explore strategies to reduce cloud expenses while maintaining high performance and availability.",
            meta: "By Jasim • Mar 11, 2026",
            delay: 0.3
        }
    ];

    return (
        <section id="resources" className="blog-section" ref={sectionRef}>
            <div className="container">
                <div className={`blog-header ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h2>Blog & Resources</h2>
                    <p>
                        Learn about cloud infrastructure, DevOps practices, and modern cloud technologies from our experts.
                    </p>
                </div>

                {isVisible && (
                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                image={post.image}
                                category={post.category}
                                title={post.title}
                                description={post.description}
                                meta={post.meta}
                                delay={post.delay}
                            />
                        ))}
                    </div>
                )}
{/* 
                <div className={`blog-cta ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                    <h3>Stay Updated with Cloud Insights</h3>
                    <button className="btn btn-primary">View All Articles</button>
                </div> */}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `.opacity-0 { opacity: 0; }` }} />
        </section>
    );
};

export default Blog;
