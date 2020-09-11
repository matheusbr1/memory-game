import styled, { css } from 'styled-components'

export const Container = styled.div`
    padding: 0;
    margin: auto;
    
    max-width: 768px;
    height: 100vh;
    
    font-family: 'Roboto', sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, h2, h3, h4 {
        margin: 15px 5px;
    }
`
export const PlayButton = styled.button`
    display: block;
    margin: 15px auto;
    width: 50%;
    max-width: 300px;
    height: 40px;
    border: none;
    border-radius: 8px; 
    color: #fff;
    background-color: green;
    outline: none;

    @media (max-width: 768px) {
        max-width: 100%;
        width: 70%;
    }
`
