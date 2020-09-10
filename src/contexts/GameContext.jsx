import React, { createContext, useState } from 'react'

import Card2 from '../assets/2.png'
import Card3 from '../assets/3.png'
import Card4 from '../assets/4.png'
import Card5 from '../assets/5.png'
import Card6 from '../assets/6.png'
import Card7 from '../assets/7.png'
import Card8 from '../assets/8.png'
import Card9 from '../assets/9.png'

export const GameContext = createContext()

const GameProvider = ({ children }) => {

    let cardState = [
        {
            name: 'Card2',
            image: Card2,
            done: false
        },
        {
            name: 'Card3',
            image: Card3,
            done: false
        },
        // {
        //     name: 'Card4',
        //     image: Card4,
        //     done: false
        // },
        // {
        //     name: 'Card5',
        //     image: Card5,
        //     done: false
        // },
        // {
        //     name: 'Card6',
        //     image: Card6,
        //     done: false
        // },
        // {
        //     name: 'Card7',
        //     image: Card7,
        //     done: false
        // },
        // {
        //     name: 'Card8',
        //     image: Card8,
        //     done: false
        // },
        // {
        //     name: 'Card9',
        //     image: Card9,
        //     done: false
        // }
    ]

    const CreateInitialState = () => {
        const itensDuplicated = cardState.concat(cardState.map(item => item = {
            name: `${item.name}-2`,
            image: item.image,
            done: false
        }))
        return itensDuplicated.sort(() => Math.random() - 0.5)
    }

    const [cards, setCards] = useState(CreateInitialState())
    const [countPlay, setCountPlay] = useState(0)
    const [selectedCards, setSelectedCards] = useState([])

    return (
        <GameContext.Provider value={{
            cardState,
            cards,
            setCards,
            CreateInitialState,
            countPlay,
            setCountPlay,
            selectedCards,
            setSelectedCards
        }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider