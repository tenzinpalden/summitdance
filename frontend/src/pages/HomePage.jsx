import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2 // Trigger when 20% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const targets = document.querySelectorAll('.scroll-fade-in, .scroll-zoom-in');
        targets.forEach(target => observer.observe(target));

        // Cleanup observer on unmount
        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, []);

    return (
        <div className="homepage-container">
            <header className="hero-section">
                <div className="hero-content scroll-fade-in">
                    <h1>Welcome to Summit Dance</h1>
                    <p>Explore the vibrant cultural heritage of Himalayan dances</p>
                    {/* Wrap the button with Link */}
                    <Link to="/discover">
                        <button className="cta-button">Discover More</button>
                    </Link>
                </div>
            </header>
            <main className="main-content">

                <section className="explore-section scroll-fade-in">
                    <h2>Explore Cultures</h2>
                    <div className="dance-cards">
                        <Link to="/tibetan" className="dance-card scroll-zoom-in">
                            <img src="/tibetan.jpg" alt="Tibetan Dance" />
                            <h3>Tibetan Dance</h3>
                            <p>Learn about the traditional circle dance of Tibet, its history, and significance.</p>
                        </Link>
                        <Link to="/bhutanese" className="dance-card scroll-zoom-in">
                            <img src="/Bhutan.jpg" alt="Bhutanese Dance" />
                            <h3>Bhutanese Dance</h3>
                            <p>Discover the unique and colorful dances of Bhutan, each with its own story and rhythm.</p>
                        </Link>
                        <Link to="/nepali" className="dance-card scroll-zoom-in">
                            <img src="/nepal.jpg" alt="Nepali Dance" />
                            <h3>Nepali Dance</h3>
                            <p>Experience the vibrant and diverse dance traditions of Nepal, celebrated across the country.</p>
                        </Link>
                    </div>
                </section>

                <section className="about-section scroll-fade-in">
                    <h2>About Us</h2>
                    <p>
                        Summit Dance is a platform dedicated to preserving and promoting the traditional circle dances of the Himalayas. 
                        Through interactive experiences, we invite you to dive into the rich traditions of Tibetan Gorshey, Bhutanese dances, and Nepali dances.
                    </p>
                </section>
                
            </main>
        </div>
    );
};

export default HomePage;