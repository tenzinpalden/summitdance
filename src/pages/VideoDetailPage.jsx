import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import './VideoDetailPage.css';

const videoData = {
    '4odD-H-rFqg': {
        title: 'སྟོད་གཞས། སྒྲ་ལ་སྙན་པའི་མ་ནིའི་གསུང་། | Toeshay Group Dance | Yarkyi 2016',
        description: 'Enjoy this beautiful traditional Tibetan group dance.',
        detailedDescription: 'This is a detailed description for Tibetan Dance Performance 1. Here you can dive deeper into the history, style, and cultural significance of this dance.',
        videoId: '4odD-H-rFqg',
    },
    'KVm_PAg30XU': {
        title: 'Bhoed Kyi Tenpa | བོད་ཀྱི་བསྟན་པ། ',
        description: 'A captivating performance of Gorshey by TIPA.',
        detailedDescription: 'This detailed description covers the unique aspects of the Gorshey performance, including the choreography, music, and the context in which this dance is typically performed.',
        videoId: 'KVm_PAg30XU',
    },
    'JINc9znSaTc': {
        title: 'Traditional Tibetan Music: Dorjee Tsering',
        description: 'Traditional Tibetan music by Dorjee Tsering.',
        detailedDescription: 'Explore the traditional Tibetan music by Dorjee Tsering, including the instruments used, the historical background, and the emotional depth conveyed in this performance.',
        videoId: 'JINc9znSaTc',
    },
};

const VideoDetailPage = () => {
    const { videoId } = useParams();
    const video = videoData[videoId];

    if (!video) {
        return <p>Video not found!</p>;
    }

    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="video-detail-page">
            <h1>{video.title}</h1>
            <YouTube videoId={video.videoId} opts={videoOptions} />
            <p>{video.detailedDescription}</p>
        </div>
    );
};

export default VideoDetailPage;