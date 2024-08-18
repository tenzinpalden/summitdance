import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import './BhutanVideoDetailPage.css';

const videoData = {
    'S4UOFp57CKg': {
        title: 'Tsahi Ley Bay',
        detailedDescription: '"Tashi Lebay" is a popular Bhutanese song often performed during traditional events and ceremonies. The song\'s lyrics typically express well-wishes and blessings for peace, happiness, and prosperity. "Tashi Lebay" is an integral part of Bhutanese cultural heritage, often sung during auspicious occasions such as weddings, celebrations, and gatherings. The melody and lyrics are designed to convey positive energy and good fortune to those present, reflecting the deep spiritual and cultural values of Bhutanese society. This is a detailed description for Bhutanese Dance Performance 1. Learn about the cultural significance, costumes, and unique dance steps involved in this beautiful performance.',
        videoId: 'S4UOFp57CKg',
    },
    'T0D0RIyR41U': {
        title: 'Rangsem La',
        detailedDescription: '"Rangsem La" is a traditional Bhutanese song that typically conveys themes of personal reflection, spirituality, and the connection between the self and the broader universe. The lyrics often encourage introspection, self-awareness, and a deeper understanding of one\'s place in the world. Songs like "Rangsem La" are an essential part of Bhutan\'s cultural and spiritual heritage, often performed during religious and cultural events to inspire mindfulness and contemplation.',
        videoId: 'T0D0RIyR41U',
    },
    '8l5OrUkLlrY': {
        title: 'Bhutanese Dance Performance 3',
        detailedDescription: '"Lungpa Chung Chung" is a traditional Bhutanese song that typically reflects the themes of nature, love, and rural life in Bhutan. The lyrics often highlight the beauty of Bhutan\'s landscapes, the simplicity of life in the countryside, and sometimes a longing or nostalgia for the past. The song is part of Bhutan\'s rich cultural heritage and is often performed during festivals, celebrations, and other cultural events.',
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