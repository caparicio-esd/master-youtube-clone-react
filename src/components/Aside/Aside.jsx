import React from 'react';
import AsideListComponent from './AsideListComponent';

const Aside = (props) => {
    return (
        <div className="aside">
            <div className="aside_inicio">
                <AsideListComponent name="Inicio" icon="home"></AsideListComponent>
                <AsideListComponent name="Biblioteca" icon="book"></AsideListComponent>
                <AsideListComponent name="Whatever"></AsideListComponent>
                <AsideListComponent></AsideListComponent>
            </div>
            <div className="aside_biblioteca">
                <AsideListComponent></AsideListComponent>
                <AsideListComponent></AsideListComponent>
                <AsideListComponent></AsideListComponent>
                <AsideListComponent></AsideListComponent>
                <AsideListComponent></AsideListComponent>
            </div>
            <div className="aside_suscripciones"></div>
        </div>
    );
};

export default Aside;
