import React, { useContext } from 'react'
import { Container } from './style'
import { GameContext } from '../../contexts/GameContext'

function Card({ src, card }) {

    const { selectedCards, setSelectedCards, countPlay, setCountPlay } = useContext(GameContext)

    function Play(card) {
        if (selectedCards.length < 2) {
            setSelectedCards(selectedCards => [...selectedCards, card])
            setCountPlay(countPlay + 1)
        }
    }

    return (
        <Container
            src={src}
            onClick={() => Play(card)}
        />
    )
}
export default Card