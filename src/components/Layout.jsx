import React from 'react';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import Main from './Main/Main';
import styled from 'styled-components';

const HomeLayout = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 350px 1fr;
    grid-template-rows: auto 1fr;
`;

const Layout = () => {
    return (
        <HomeLayout className="yt_home">
            <Header></Header>
            <Aside></Aside>
            <Main></Main>
        </HomeLayout>
    );
};

export default Layout;
