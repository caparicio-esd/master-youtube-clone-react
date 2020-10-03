import React from 'react';
import { ReactComponent as IconBars } from './../../../assets/icons/bars.svg';
import { ReactComponent as YoutubeLogo } from './../../../assets/icons/youtube_logo.svg';

const HeaderBrand = (props) => {
    return (
        <div className="header_brand">
            <div className="header_toggle" style={{ height: '20px' }}>
                <IconBars></IconBars>
            </div>
            <div className="header_logo">
                <div className="header_logo_yt" style={{ height: '30px' }}>
                    <YoutubeLogo></YoutubeLogo>
                </div>
                <div className="header_logo_country">ES</div>
            </div>
        </div>
    );
};

export default HeaderBrand;
