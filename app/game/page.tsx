'use client'
import React, { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard';


const GamePage = () => {
    interface Card {
        id: number;
        name: string;
        image_uris: {
            normal: string;
        };
        uniqueId: number;
        matched: boolean;
    }

    const [cards, setCards] = useState<Array<Card>>([]);
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState<Card | null>(null)
    const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
    const [disabled, setDisabled] = useState(false)

    //TODO change the number of pairs to be an input from user
    const numberOfPairs: number = 6

    //API call to draw a random MTG card and push it to cards array twice for two copies then sort random
    const fetchCards = React.useCallback(async () => {

        let fetchedCards: Array<Card> = [];

        for (let i = 0; i < numberOfPairs; i++) {
            let res = await fetch('https://api.scryfall.com/cards/random', { cache: 'no-store' });
            let card: Card = await res.json();
            if (card.image_uris) {
                fetchedCards.push(card, card);
            } else {
                i--
            }
        }

        fetchedCards = fetchedCards
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, uniqueId: Math.random(), matched: false }));
        setCards(fetchedCards);
    }, []);

    useEffect(() => {
        fetchCards();
    }, [fetchCards]);

   
    //When a card is selected set it to either choice one or choice two
    const handleChoice = (card: Card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    };

    //Check if choice one and choice two cards match. 
    //UseEffect fires when the component first mounts and whenever the dependency changes
    //If cards match then set matched property to true
    //Reset the turn
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.name === choiceTwo.name) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.name === choiceOne.name) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])


    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    return (
        <div className=" bg-vintage lg:h-screen flex flex-col justify-between">
            <h1 className="font-bold text-6xl p-5 bg-custom-purple text-custom-gold border-8 border-custom-gold">Gather the Magic</h1>
            <div className="flex justify-center py-8">
                <div className=" grid lg:grid-cols-6 grid-cols-2 gap-6">
                    {cards.map((card) =>
                        <SingleCard
                            key={card.uniqueId}
                            card={card}
                            handleChoice={() => handleChoice(card)}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled} />
                    )}
                </div>
            </div>
            <div className="text-2xl bg-custom-purple text-custom-gold border-8 border-custom-gold">Turns: {turns}</div>
        </div >

    )
}


export default GamePage