import React from 'react';
import { ReactComponent as SeeLaterLogo } from './../../assets/icons/see_later.svg';
import { ReactComponent as PlusLogo } from './../../assets/icons/plus.svg';
import VideoCardCta from './VideoCardCta';

const VideoCard = ({ cardContent }) => {
    return (
        <div className="video_card">
            <div className="video_pic">
                <div className="video_pic_picture">
                    <img src={cardContent.picture} alt={cardContent.title} />
                </div>
                <div className="video_duration">{cardContent.duration}</div>
                <div className="video_pic_ctas">
                    <VideoCardCta label="Ver más tarde" logo={<SeeLaterLogo />} />
                    <VideoCardCta label="Añadir a la cola" logo={<PlusLogo />} />
                </div>
            </div>
            <div className="video_info">
                <h3 className="video_title">{cardContent.title}</h3>
                <div className="video_info_content">
                    <div className="author">{cardContent.authorUser}</div>
                    <div className="author">{cardContent.isValidated}</div>
                    <div className="visualizations">
                        {cardContent.visualizations} visualizaciones
                    </div>
                    <span className="fa fa-circle"></span>
                    <div className="duration">{cardContent.duration}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
