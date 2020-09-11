import styled from 'styled-components'

export const Container = styled.img`
    width: calc((100% - 10px * 6 ) / 6);
    max-width: 125px;
    max-height: 100px;
    margin: 5px;

    @media (max-width: 600px) {
        width: calc((100% - 10px * 3 ) / 3);
    }
`