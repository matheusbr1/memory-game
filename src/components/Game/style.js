import styled, { css } from 'styled-components'

export const Button = styled.button`
    width: calc((100% - 2px * 8 ) / 4);
    border: none;
    max-width: 700px;
    height: 100px;
    margin: 2px;
    border-radius: 8px; 
    outline: none;
`

export const PlayButton = styled.button`
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 50px;
    border: none;
    border-radius: 8px; 
    color: #fff;
    background-color: green;
    outline: none;
`
