import React from 'react';

const HeaderSearchResult = (props) => {
    return (
        <div className="search_result">
            <div className="search_result_label">{props.label}</div>
            <div className="search_result_cta">
                <button>Quitar</button>
            </div>
        </div>
    );
};

export default HeaderSearchResult;
