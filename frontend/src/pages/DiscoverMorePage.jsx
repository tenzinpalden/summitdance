import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DiscoverMorePage.css';

const DiscoverMorePage = () => {

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
        targets.forEach((target, index) => {
            target.style.setProperty('--card-index', index); // Set custom property for staggered animation
            observer.observe(target);
        });

        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, []);

    return (
        <div className="discover-container">
            <h1>Discover More</h1>
            <div className="culture-cards">
                <Link to="/tibetan" className="culture-card scroll-fade-in">
                    <img src="/tibetan.jpg" alt="Tibetan Culture" />
                    <h3>Tibetan</h3>
                    <p>
                        Dive deep into the vibrant traditions of Tibetan culture. Explore the sacred dances like the Tibetan Gorshey, which symbolize unity and community. Learn about the historical significance of these performances in Tibetan monasteries and villages, where they serve as both spiritual offerings and cultural preservation.
                    </p>
                </Link>
                <Link to="/bhutanese" className="culture-card scroll-fade-in">
                    <img src="/bhutan.jpg" alt="Bhutanese Culture" />
                    <h3>Bhutanese</h3>
                    <p>
                        Experience the unique and colorful culture of Bhutan, where every dance tells a story. From the majestic Cham dances performed by masked monks to the lively folk dances in rural festivals, Bhutanese culture is a living heritage of faith, art, and community. Discover how these traditions have been preserved over centuries.
                    </p>
                </Link>
                <Link to="/nepali" className="culture-card scroll-fade-in">
                    <img src="/nepal.jpg" alt="Nepali Culture" />
                    <h3>Nepali</h3>
                    <p>
                        Journey through the rich and diverse culture of Nepal, a land of festivals, music, and dance. From the energetic dances of the Newar people to the serene movements in the rituals of the Kathmandu Valley, Nepali culture is a tapestry of traditions that reflect the country's multi-ethnic heritage and its deep spiritual roots.
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default DiscoverMorePage;