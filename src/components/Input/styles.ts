import styled from 'styled-components'
import {TextStyle as TaskTextStyle} from '../Task/styles'

export const InsertInput = styled.input`
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    color: yellow;
    background-color: transparent;
    outline: none;
    -webkit-appearance: textfield;
    ${TaskTextStyle};

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${(props) => props.theme.placeholder};
        opacity: 1; /* Firefox */
    }

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`
