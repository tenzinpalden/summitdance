import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Summit Dance</h1>
                    <p>Explore the vibrant cultural heritage of Himalayan dances.</p>
                    <button className="cta-button">Discover More</button>
                </div>
            </header>
            <main className="main-content">

                <section className="explore-section">
                    <h2>Explore the Dances</h2>
                    <div className="dance-cards">
                        <div className="dance-card">
                            <img src="/path-to-tibetan-image.jpg" alt="Tibetan Gorshey" />
                            <h3>Tibetan Gorshey</h3>
                            <p>Learn about the traditional circle dance of Tibet, its history, and significance.</p>
                        </div>
                        <div className="dance-card">
                            <img src="/path-to-bhutanese-image.jpg" alt="Bhutanese Dance" />
                            <h3>Bhutanese Dance</h3>
                            <p>Discover the unique and colorful dances of Bhutan, each with its own story and rhythm.</p>
                        </div>
                        <div className="dance-card">
                            <img src="/path-to-nepali-image.jpg" alt="Nepali Dance" />
                            <h3>Nepali Dance</h3>
                            <p>Experience the vibrant and diverse dance traditions of Nepal, celebrated across the country.</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
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