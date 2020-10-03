import React from 'react';
import Header from './Header/Header';
import Aside from './Aside/Aside';

const App = () => {
    return (
        <div className="app">
            <Header></Header>
            <Aside></Aside>
            <div className="aside"></div>
            <div className="main"></div>
        </div>
    );
};

export default App;
