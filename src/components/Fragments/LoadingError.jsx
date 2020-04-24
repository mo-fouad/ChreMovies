import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import {Theme} from "../styled/Them";

const ErrMsg = styled.h3`
  color: ${Theme.FontColor};
  text-align: center;
  padding: 20px;
`

function LoadingError(props) {
    const {message} = props
    return (
        <ErrMsg>
            {message}
        </ErrMsg>
    );
}

export default LoadingError

LoadingError.propTypes = {
    message: PropTypes.string.isRequired
}