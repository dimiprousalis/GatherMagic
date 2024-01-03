'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Card {
    id: number;
    name: string;
    image_uris: {
        normal: string;
    };
    uniqueId: number;
    matched: boolean;
}

interface SingleCardProps {
    card: Card;
    handleChoice: (card: Card) => void;
    flipped: boolean;
    disabled: boolean;
}

export const SingleCard: React.FC<SingleCardProps> = ({ card, handleChoice, flipped, disabled }) => {


    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card mx-auto ">
            <div className={flipped ? "flipped" : ""}>
                <Image className="mx-auto rounded-md front"
                    src={card.image_uris.normal}
                    width={150}
                    height={150}
                    alt="Magic card front" />

                <div onClick={handleClick}>
                    <Image className="mx-auto rounded-md back"
                        src={"/mtg.png"}
                        width={150}
                        height={150}
                        alt="Magic card back" />
                </div>
            </div>
        </div>
    )
}


export default SingleCard
