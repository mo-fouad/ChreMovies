import React from 'react'
import Styled from 'styled-components'
import {Theme} from "../styled/Them";

const AppTitle = Styled.h3`
    text-align:center;
    color : ${Theme.FontColor};
    padding : 1rem;
    border-bottom : 3px solid ${Theme.BorderColor}
`

function Header() {
    return (
        <header>
            <AppTitle>
                Welcome To Chis Movies Catalog
            </AppTitle>
        </header>
    );
}

export default Header
