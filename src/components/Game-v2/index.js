import React, { useContext, useEffect, useState } from 'react'
import { Background, Container, PlayButton } from './style.js'
import { GameContext } from '../../contexts/GameContext'
import Card from '../Card'
import CardDefault from '../../assets/1.png'

function Game() {

    const {
        cards,
        setCards,
        selectedCards,
        setSelectedCards,
        countPlay,
        setCountPlay,
        setMoviments,
        moviments,
        CreateInitialState
    } = useContext(GameContext)

    const [playing, setPlaying] = useState(false)
    const [time, setTime] = useState(() => new Date().getSeconds())

    function handleResult() {
        if (countPlay === 2) {
            const result = `${selectedCards[0]}-2` === selectedCards[1]
                || selectedCards[0] === `${selectedCards[1]}-2`
            setTimeout(() => {
                if (result) {
                    console.log('Match')
                    selectedCards.map(item => {
                        cards.map(card => {
                            (card.name === item) && (card.done = true)
                        })
                    })
                }
                resetTentative()
            }, 500)
        }
    }

    function resetTentative() {
        setSelectedCards([])
        setCountPlay(0)
    }

    function resetGame() {
        setTime(new Date().getSeconds())
        setMoviments(0)
        setCards(CreateInitialState())
    }

    useEffect(() => handleResult(), [countPlay, cards])

    const CardsLeftToFinish = cards.filter(item => item.done !== true)

    useEffect(() => {
        if (CardsLeftToFinish.length === 0) {
            const currentTime = new Date().getSeconds()
            setPlaying(false)
            if (time >= currentTime) {
                setTime(60 - time + currentTime)
            } else {
                setTime(currentTime - time)
            }
        }
    }, [selectedCards])

    return (
        <Background>
            <Container playing={playing} >
                {(playing) ? (
                    <div id='CardsContainer' >
                        <h2>Movimentos: {moviments}</h2>
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
                    </div>
                ) : (
                        <>
                            <h1>Jogo da Memória</h1>
                            {(moviments !== 0) && (
                                <>
                                    <h2>Movimentos Executados : {moviments}</h2>
                                    <h2>Tempo : {time} segundos </h2>
                                </>
                            )}
                            <PlayButton onClick={() => {
                                resetGame()
                                setPlaying(true)
                            }} >Jogar</PlayButton>
                        </>
                    )}
            </Container>
        </Background>
    )
}

export default Game