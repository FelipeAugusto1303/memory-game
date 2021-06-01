import React from 'react'
import './Card.css';

const Card = ({value, isFlip, onClick, done, disable}) => {

    return(
        <div className="card-container">
            {done && <div className={!isFlip ? "card-flipped":"card-not-flipped"} 
                onClick={onClick}
                disable={disable}>
                    <p className={!isFlip? "hidden-text":"show-text"}>{value}</p>
            </div>}
        </div>
    )
}

export default Card;