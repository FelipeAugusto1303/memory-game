import React from 'react'
import './Card.css';

const Card = ({value}) => {
    const [flip, setFlip] = React.useState(false)

    const onFlip = () => {
        console.log("clique!")
        setFlip(!flip)
    }

    return(
        <div className="card-container">
            <div className={!flip ? "card-flipped":"card-not-flipped"} 
                onClick={() => onFlip()}>
                    <p className={!flip? "hidden-text":"show-text"}>{value}</p>
            </div>
        </div>
    )
}

export default Card;