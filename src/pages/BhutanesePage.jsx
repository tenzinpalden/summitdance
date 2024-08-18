import React from 'react';
import { Link } from 'react-router-dom';
import './BhutanPage.css';

const videos = [
    {
        id: 'S4UOFp57CKg',
        title: 'Tsahi Ley Bay',
    },
    {
        id: 'T0D0RIyR41U',
        title: 'Rangsem La',
        detailedDescription: 'In this performance, the vibrant energy and community spirit of Bhutanese folk dance are highlighted. The detailed description covers the history and modern interpretations of this dance.',
    },
    {
        id: '8l5OrUkLlrY',
        title: 'Lungpa Chung Chung',
        detailedDescription: 'This detailed description explores the traditional Bhutanese dance accompanied by live music, including the instruments used and the cultural stories told through the dance.',
    }
];

const BhutanPage = () => {
    return (
        <div className="bhutan-page">
            <h1>Bhutanese Dance Videos</h1>
            <p>Discover the vibrant and diverse dance traditions of Bhutan.</p>
            <div className="video-grid">
                {videos.map((video) => (
                    <Link to={`/bhutan/video/${video.id}`} className="video-card" key={video.id}>
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

export default BhutanPage;