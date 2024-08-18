import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import './BhutanVideoDetailPage.css';

const videoData = {
    'S4UOFp57CKg': {
        title: 'Tsahi Ley Bay',
        description: 'Experience the elegance of traditional Bhutanese dance.',
        detailedDescription: 'This is a detailed description for Bhutanese Dance Performance 1. Learn about the cultural significance, costumes, and unique dance steps involved in this beautiful performance.',
        videoId: 'S4UOFp57CKg',
    },
    'T0D0RIyR41U': {
        title: 'Rangsem La',
        description: 'A lively performance showcasing Bhutanese folk dance.',
        detailedDescription: 'In this performance, the vibrant energy and community spirit of Bhutanese folk dance are highlighted. The detailed description covers the history and modern interpretations of this dance.',
        videoId: 'T0D0RIyR41U',
    },
    '8l5OrUkLlrY': {
        title: 'Lungpa Chung Chung ',
        description: 'Traditional Bhutanese dance with musical accompaniment.',
        detailedDescription: 'This detailed description explores the traditional Bhutanese dance accompanied by live music, including the instruments used and the cultural stories told through the dance.',
        videoId: '8l5OrUkLlrY',
    },
};

const BhutanVideoDetailPage = () => {
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

export default BhutanVideoDetailPage;