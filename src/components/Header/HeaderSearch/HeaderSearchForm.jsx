import React from 'react';
import styled from 'styled-components';

/**
 *
 *
 */
const HeaderSearchFormStyled = styled.div`
    form {
        display: flex;
    }
    .form_group_input {
        flex-basis: 100%;
    }
    .form_group_input input {
        display: block;
        width: 100%;
        padding: 0.35rem 1rem;
        border: 1px solid #ccc;
        border-radius: 2px 0 0 2px;
    }
    button {
        padding: 0.35rem 2rem;
        border: 1px solid #ccc;
        background-color: #ccc;
        border-radius: 0 2px 2px 0;
    }
`;

/**
 *
 *
 */
const HeaderSearchForm = (props) => {
    return (
        <HeaderSearchFormStyled className="header_searchform">
            <form>
                <div className="form_group form_group_input">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Busca whatever..."
                        autoComplete="off"
                        onFocus={() => props.resultsOpen(true)}
                        onBlur={() => props.resultsOpen(false)}
                    />
                </div>
                <div className="form_group">
                    <button>
                        <span className="fa fa-search"></span>
                    </button>
                </div>
            </form>
        </HeaderSearchFormStyled>
    );
};

export default HeaderSearchForm;
