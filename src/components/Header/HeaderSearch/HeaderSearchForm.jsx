import React from 'react';

const HeaderSearchForm = (props) => {
    return (
        <div className="header_searchform">
            <form>
                <div className="form_group">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Busca whatever..."
                    />
                </div>
                <div className="form_group">
                    <button>
                        <span className="fa fa-search"></span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HeaderSearchForm;
