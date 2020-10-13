import React from 'react';
import styled from 'styled-components';

const VideoCardCtaStyled = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 .5rem;

    .video_pic_cta_logo {
        width: 20px; 
        path {
            fill: white;
        }
    }
    .video_pic_cta_label {
        color: white;
        font-size: .85rem;
        text-transform: uppercase;
        margin-right: 1rem;
    }
`;


const VideoCardCta = ({ logo, label }) => {
    return (
        <VideoCardCtaStyled className="video_pic_cta">
            <div className="video_pic_cta_logo">{logo}</div>
            <div className="video_pic_cta_label">{label}</div>
        </VideoCardCtaStyled>
    );
};

export default VideoCardCta;
