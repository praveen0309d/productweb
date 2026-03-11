import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import Overview from "./Overview";
import About from "./About"
import Services from "./Services";
import Benefits from "./Benefits";
import Blog from "./Blog";
import Contact from "./Contact";
function Home() {
    return (
        <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Benefits />
            <Blog />
            <Contact/>
            <footer style={{
                backgroundColor: "var(--color-primary)",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                padding: "2rem 0",
                marginTop: "4rem"
            }}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} JPN Cloud Solutions. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;