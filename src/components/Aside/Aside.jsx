import React from 'react';
import AsideListComponent from './AsideListComponent';
import AsideTitle from './AsideTitle';
import AsideSuscriptionComponent from './AsideSuscriptionComponent';


import Footer from './Footer';
import styled from 'styled-components';

import asideDataRaw from './../../api/aside';

const AsideStyled = styled.aside`
    grid-area: 2 / 1 / span 1 / span 1;
    border-right: 1px solid #ddd;
    max-height: 100%;
    overflow: auto;

    > div {
        border-bottom: 2px solid #ddd;
    }
`;

const Aside = (props) => {


    console.log(asideDataRaw);



    return (
        <AsideStyled className="aside">

            {/* 
                Muy importante el uso de map
            */}
            {asideDataRaw.map((section, i) => (
                <section className={section.className} key={i}>
                    {/* 
                        Y de condicionales...
                    */}
                    {
                        section.title != '' ?
                        <h3><AsideTitle title={section.title} /></h3> :
                        null
                    }

                    {section.children.map((child, j) => (
                        <AsideListComponent listInfo={child} key={j} />
                    ))}
                </section>
            ))}

            <Footer />
        </AsideStyled>
    );
};

export default Aside;
