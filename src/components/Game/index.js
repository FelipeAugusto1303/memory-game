import React from 'react';
import Card from '../Card';
import './Game.css';

const Game = ({ nElements }) => {
    const [values, setValues] = React.useState([]);
    const [flag, setFlag] = React.useState(false)

    React.useEffect(()=>{
        setValues(generateArray(nElements))
    },[])

    const generateArray = (nElements) => {
        const values = []
        const jsonValues = []
        for(var i=0;i< nElements*2; i++){
            if(i % 2 === 0){
                values.push(i/2 + 1)
            }
            else{
                values.push((i -1)/2 + 1)
            }
            console.log(i)
        }
        values.sort(() => Math.random() - 0.5).forEach((element, idx) => {
            jsonValues.push({
                "value": element,
                "flipped": false
            })
        })
        return jsonValues
    }


    const onFlip = (values,idx) => {
        console.log("clique!")
        values[idx].flipped = !values[idx].flipped
        setValues(values)
        setFlag(!flag)
    }

    const gameRules = () => {}

    return(
        <div className="game-container">
            {values.map((item, idx) => {
                return (
                    values && <div key={idx}>
                        <Card value={item.value} isFlip={item.flipped} onClick={() => onFlip(values,idx)}/>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Game;