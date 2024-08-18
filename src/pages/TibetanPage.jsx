import React from 'react';
import { Link } from 'react-router-dom';
import './TibetanPage.css';

const videos = [
    {
        id: '4odD-H-rFqg',
        title: 'སྟོད་གཞས། སྒྲ་ལ་སྙན་པའི་མ་ནིའི་གསུང་། | Toeshay Group Dance | Yarkyi 2016',
    },
    {
        id: 'KVm_PAg30XU',
        title: 'Bhoed Kyi Tenpa | བོད་ཀྱི་བསྟན་པ། ',
    },
    {
        id: 'JINc9znSaTc',
        title: 'Traditional Tibetan Music: Dorjee Tsering',
    }
];

const TibetanPage = () => {
    return (
        <div className="tibetan-page">
            <h1>Tibetan Dance Videos</h1>
            <p>Explore the rich heritage of Tibetan dances through these selected videos.</p>
            <div className="video-grid">
                {videos.map((video) => (
                    <Link to={`/video/${video.id}`} className="video-card" key={video.id}>
                        <img 
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                            alt={video.title} 
                            className="video-thumbnail"
                        />
                        <div className="video-info">
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TibetanPage;