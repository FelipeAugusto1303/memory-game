import React from 'react';
import './Start.css';
import {useHistory} from 'react-router-dom'

const Start = () => {
    const history = useHistory();
    return(
        <div className="start-container">
            <p>Memory Game</p>
            <div className="start-button" onClick={() => {
                history.push('/Game')
            }}>
                <p>Start a Game</p>
            </div>
        </div>
    )
} 

export default Start