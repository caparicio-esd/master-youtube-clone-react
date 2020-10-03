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

const HeaderNavigation = (props) => {
    return (
        <div className="header_navigation">
            <div className="header_navigation_apps">
                <HeaderNavigationAppItem icon={<StreamLogo />} window={<StreamWindow />} />
                <HeaderNavigationAppItem icon={<AppsLogo />} window={<AppsWindow />} />
                <HeaderNavigationAppItem icon={<BellLogo />} window={<NotificationsWindow />} />
            </div>
            <div className="header_navigation_user">
                <div className="header_navigation_user_picture">
                    <img src={UserPicture} alt="user"/>
                </div>
                <UserWindow></UserWindow>
            </div>
        </div>
    );
};

export default HeaderNavigation;
