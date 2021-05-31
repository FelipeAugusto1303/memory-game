import React from 'react';
import Card from '../Card';
import './Game.css';

const Game = ({ nElements }) => {
    const [values, setValues] = React.useState([])

    React.useEffect(()=>{
        generateArray(nElements)
    },[])

    const generateArray = (nElements) => {
        const values = []
        for(var i=0;i< nElements*2; i++){
            if(i % 2 === 0){
                values.push(i/2 + 1)
            }
            else{
                values.push((i -1)/2 + 1)
            }
            console.log(i)
        }
        setValues(values.sort(() => Math.random() - 0.5))
    }

    const shuffle = ({ values }) => {

    }

    return(
        <div className="game-container">
            {values.map((value, idx) => {
                return <Card key={idx} value={value}/>
            })}
            
        </div>
    )
}

export default Game;