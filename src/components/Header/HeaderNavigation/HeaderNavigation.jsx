import React from 'react';
import HeaderNavigationAppItem from './HeaderNavigationAppItem';

import { ReactComponent as StreamLogo } from './../../../assets/icons/stream.svg';
import StreamWindow from './StreamWindow';
import { ReactComponent as AppsLogo } from './../../../assets/icons/apps.svg';
import AppsWindow from './AppsWindow';
import { ReactComponent as BellLogo } from './../../../assets/icons/notifications.svg';
import NotificationsWindow from './NotificationsWindow';
import UserPicture from './../../../assets/img/user.jpg';
import UserWindow from './UserWindow';
import styled from 'styled-components';

/**
 *
 *
 */
const HeaderNavigationStyled = styled.nav`
    display: flex;
    align-items: center;

    .header_navigation_apps {
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
    }
    .header_navigation_user {
    }
    .header_navigation_user_picture {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }
    .header_navigation_user_picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .user_window {
        display: none;
    }
`;

/**
 *
 *
 */
const HeaderNavigation = (props) => {
    return (
        <HeaderNavigationStyled className="header_navigation">
            <div className="header_navigation_apps">
                <HeaderNavigationAppItem icon={<StreamLogo />} window={<StreamWindow />} />
                <HeaderNavigationAppItem icon={<AppsLogo />} window={<AppsWindow />} />
                <HeaderNavigationAppItem icon={<BellLogo />} window={<NotificationsWindow />} />
            </div>
            <div className="header_navigation_user">
                <div className="header_navigation_user_picture">
                    <img src={UserPicture} alt="user" />
                </div>
                <UserWindow></UserWindow>
            </div>
        </HeaderNavigationStyled>
    );
};

export default HeaderNavigation;
