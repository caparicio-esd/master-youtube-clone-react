import React from 'react';
import { ReactComponent as SeeLaterLogo } from './../../assets/icons/see_later.svg';
import { ReactComponent as PlusLogo } from './../../assets/icons/plus.svg';
import VideoCardCta from './VideoCardCta';
import styled from 'styled-components';

const VideoCardStyled = styled.div`
    .video_pic {
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr auto;

        .video_pic_picture {
            grid-area: 1 / 1 / -1 / -1;
            img {
                width: 100%;
            }
        }
        .video_duration {
            grid-area: -2 / -2 / span 1 / span 1;
            justify-self: flex-end;
            color: white;
            background-color: rgba(0, 0, 0, .8);
            padding: .25rem;
            margin: .25rem;
        }
        .video_pic_ctas {
            grid-area: 1 / -2 / span 1 / span 1;
        }
    }

    .video_info {
        .video_title {
        }
        .video_info_content {
            .author {
            }
            .visualizations {
            }
            .fa {
            }
            .duration {
            }
        }
    }
`;

const VideoCard = ({ cardContent }) => {
    return (
        <VideoCardStyled className="video_card">
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
        </VideoCardStyled>
    );
};

export default VideoCard;
