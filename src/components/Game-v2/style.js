import styled, { css } from 'styled-components'
import background from '../../assets/fundo.jpeg'

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    background-image: url(${background});
    background-blend-mode: color;
    width:100%;
    height:100%;
`

export const Container = styled.div`
    padding: 0;
    margin: auto;

    background-image: 'url('${background}')';
    
    max-width: 768px;
    height: 100vh;
    
    font-family: 'Roboto', sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        div#CardsContainer {
            max-width:calc(125px * 3);
        }
    }

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
