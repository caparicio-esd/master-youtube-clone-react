import React from 'react';

const VideoCardCta = ({ logo, label }) => {
    return (
        <div className="video_pic_cta">
            <div className="video_pic_cta_logo">{logo}</div>
            <div className="video_pic_cta_label">{label}</div>
        </div>
    );
};

export default VideoCardCta;
