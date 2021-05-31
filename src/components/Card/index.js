import React from 'react'
import './Card.css';

const Card = ({value, isFlip, onClick}) => {

    return(
        <div className="card-container">
            <div className={!isFlip ? "card-flipped":"card-not-flipped"} 
                onClick={onClick}>
                    <p className={!isFlip? "hidden-text":"show-text"}>{value}</p>
            </div>
        </div>
    )
}

export default Card;