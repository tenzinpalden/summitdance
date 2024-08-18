import React from 'react';
import YouTube from 'react-youtube';
import './TibetanPage.css';

const TibetanPage = () => {
    const videoOptions = {
        height: '200',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    const videos = [
        {
            id: '4odD-H-rFqg',
            description: 'Enjoy this beautiful traditional Tibetan group dance.'
        },
        {
            id: 'KVm_PAg30XU',
            description: 'A captivating performance of Gorshey by TIPA.'
        },
        {
            id: 'JINc9znSaTc',
            description: 'Traditional Tibetan music by Dorjee Tsering.'
        }
    ];

    return (
        <div className="tibetan-page">
            <h1>Tibetan Dance Videos</h1>
            <p>Explore the rich heritage of Tibetan dances through these selected videos.</p>
            <div className="video-grid">
                {videos.map((video) => (
                    <div className="video-card" key={video.id}>
                        <YouTube videoId={video.id} opts={videoOptions} />
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TibetanPage;