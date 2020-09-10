import React, { useContext, useState, useEffect } from 'react'
import { Container } from './style.js'
import { GameContext } from '../../contexts/GameContext'
import Card from '../Card'
import CardDefault from '../../assets/1.png'

function Game() {

    const {
        cards,
        setCards,
        CreateInitialState,
        selectedCards,
        setSelectedCards,
        countPlay,
        setCountPlay
    } = useContext(GameContext)

    function CheckResult() {
        const sc = selectedCards
        const result = `${sc[0]}-2` === sc[1] || sc[0] === `${sc[1]}-2`
        setTimeout(() => {
            if (result) {
                console.log('Match')
            }
            ResetTentative()
        }, 2000)
    }

    function ResetTentative() {
        setSelectedCards([])
        setCountPlay(0)
    }

    useEffect(() => {
        if (countPlay === 2) CheckResult()
        if (cards.length === 0) setCards(CreateInitialState())
    }, [countPlay, cards])

    useEffect(() => {
        console.log(cards)
        console.log(selectedCards)
        console.log(countPlay)
    }, [cards, countPlay, selectedCards])

    return (
        <Container>
            <h1>Jogo da Memória</h1>
            {cards.map(card => {
                return (card.done) ? (
                    <Card
                        card={card.name}
                        key={card.name}
                        src={card.image}
                    />
                ) : (
                        <Card
                            card={card.name}
                            key={card.name}
                            src={CardDefault}
                        />
                    )
            })}
        </Container>
    )
}

export default Game