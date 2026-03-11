import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-logo">
                    JPN <span>Cloud Solutions</span>
                </div>

                <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="/#hero" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="/#services" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a href="/#solutions" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
                    <a href="/#about" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#contact" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    <a href="http://squarebrothers.com/" className="navbar-cta" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
                </div>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    {mobileMenuOpen ? <X color="white" /> : <Menu color="white" />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
