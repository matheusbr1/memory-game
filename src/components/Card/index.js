import React, { useContext } from 'react'
import { Container } from './style'
import { GameContext } from '../../contexts/GameContext'

function Card({ src, card }) {

    const {
        selectedCards,
        setSelectedCards,
        countPlay,
        setCountPlay,
        cards,
        moviments,
        setMoviments
    } = useContext(GameContext)

    function Play(card) {
        setMoviments(moviments + 1)

        cards.map(item => (item.name === card) && (item.done = true))

        setTimeout(() => cards.map(item => (item.name === card) && (item.done = false)), 500)

        if (selectedCards.length < 2) {
            setSelectedCards(selectedCards => [...selectedCards, card])
            setCountPlay(countPlay + 1)
        }
    }

    return (
        <Container
            src={src}
            onClick={() => {
                Play(card)
            }}
        />
    )
}
export default Card