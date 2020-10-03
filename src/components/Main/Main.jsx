import React from 'react';
import VideoCard from './VideoCard';
import videosData from './videosData.json';

const Main = () => {
    return (
        <div className="main">
            {videosData.map((video, i) => (
                <VideoCard key={i} cardContent={video} />
            ))}
        </div>
    );
};

export default Main;
