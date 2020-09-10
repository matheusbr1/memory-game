import React, { useState, useEffect } from 'react'

import { Container, Button, PlayButton } from './style.js'

import Card from '../Card'

function Game() {

    let itens = ['Uva', 'Mamão', 'Pera', 'Maça', 'Banana', 'Melão', 'Melancia', 'Abacate']

    function CreateInitialState() {
        let itensDuplicated = itens.concat(itens.map(item => `${item}-2`))
        return itensDuplicated.sort(() => Math.random() - 0.5)
    }
    const [cards, setCards] = useState(CreateInitialState())
    const [playing, setPlaying] = useState(false)
    const [selectedCards, setSelectedCards] = useState([])
    const [countPlay, setCountPlay] = useState(0)
    const [isSelected, setIsSelected] = useState(true)

    function Play(card) {
        if (selectedCards.length < 2) {
            setSelectedCards(selectedCards => [...selectedCards, card])
            setCountPlay(countPlay + 1)
            modifyCard(card)
        }
    }

    function modifyCard(card) {
        if (!!card && isSelected) {
            document.getElementById(card).style.background = 'DarkBlue'
            document.getElementById(card).style.color = 'White'
        } else {
            cards.map(item => {
                document.getElementById(item).style.background = 'rgb(239, 239, 239)'
                document.getElementById(item).style.border = 'none'
                document.getElementById(item).style.color = 'Black'
            })
        }
    }

    function CheckResult() {
        const sc = selectedCards
        const result = `${sc[0]}-2` === sc[1] || sc[0] === `${sc[1]}-2`
        setTimeout(() => {
            ResetTentative()
            if (result) setCards(cards.filter(cards => cards !== sc[0] && cards !== sc[1]))
        }, 2000)
    }

    function ResetTentative() {
        setSelectedCards([])
        setCountPlay(0)
        setIsSelected(false)
        modifyCard()
        setIsSelected(true)
    }

    function CardName(card) {
        return (card === selectedCards[0] || card === selectedCards[1]) ? card.includes('-2') ? card.split('-2')[0] : card : 'Card'
    }

    useEffect(() => {
        if (countPlay === 2) CheckResult()
        if (cards.length === 0) {
            setPlaying(false)
            setCards(CreateInitialState())
        }
    }, [countPlay, cards])

    return (
        <Container>
            <h1>Jogo da Memória</h1>
            {(!!playing) ? cards.map(card => (

                <>
                    <Button
                        id={card}
                        key={card}
                        onClick={() => Play(card)}>
                        {CardName(card)}
                    </Button>
                </>

            )) : <PlayButton id='Play' onClick={() => setPlaying(true)} >Jogar</PlayButton>}
        </Container>
    )
}

export default Game