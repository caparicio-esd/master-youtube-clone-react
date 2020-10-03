import React from 'react'
import Header from './Header/Header';
import Aside from './Aside/Aside';
import Main from './Main/Main';

const Layout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Aside></Aside>
            <Main></Main>
        </div>
    )
}

export default Layout
