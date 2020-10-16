import React from 'react';
import { ReactComponent as IconBars } from './../../../assets/icons/bars.svg';
import { ReactComponent as YoutubeLogo } from './../../../assets/icons/youtube_logo.svg';
import styled from 'styled-components';

/**
 *
 */
const HeaderBrandStyled = styled.div`
    display: flex;
    align-items: center;

    .header_toggle {
        width: 20px;
        margin-right: 0.75rem;
    }
    .header_toggle svg g {
        fill: #666;
    }
    .header_logo {
        display: flex;
        align-items: center;
    }
    .header_logo_yt {
        width: 95px;
    }
    .header_logo_country {
        font-size: 14px;
        align-self: flex-start;
    }
`;

/**
 *
 *
 */
const HeaderBrand = ({logo}) => {
    return (
        <HeaderBrandStyled className="header_brand">
            <div className="header_toggle">
                <IconBars></IconBars>
            </div>
            <div className="header_logo">
                <div className="header_logo_yt">
                    <YoutubeLogo></YoutubeLogo>
                </div>
                <div className="header_logo_country">ES</div>
            </div>
        </HeaderBrandStyled>
    );
};

export default HeaderBrand;
