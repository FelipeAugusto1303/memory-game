import React from 'react';
import Card from '../Card';
import './Game.css';

const Game = ({ nElements=10 }) => {
    const [values, setValues] = React.useState([]);
    const [flag, setFlag] = React.useState(false);
    const [disable, setDisable] = React.useState(false)
    const [points, setPoints] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const [hour, setHour] = React.useState(0);
    const [minute, setMinute] = React.useState(0);
    const [second, setSecond] = React.useState(0);


    React.useEffect(()=>{
        const generated = generateArray(nElements)
        setValues(generated)
        setPoints(0)
        setTimeout(() => {
            const timer = setInterval(() => {
                if(second === 59){
                    setSecond(0)
                    if(minute === 59){
                        setMinute(0)
                        setHour(prev=>prev+1)
                    }
                    else setMinute(prev=>prev+1)
                }
                else setSecond(prev=>prev+1)
            },1000)
        },1000)
        
    },[])

    React.useEffect(()=>{
        if(disable){
            const selectedValues = values.filter((element) => element.flipped === true)
            if(selectedValues[0].value === selectedValues[1].value){
                setTimeout(()=>{
                    values[selectedValues[0].index].visible = false
                    values[selectedValues[1].index].visible = false
                    values[selectedValues[0].index].flipped = false
                    values[selectedValues[1].index].flipped = false
                    setValues(values)
                    setDisable(false)
                    setPoints(prev=>prev+1)
                }, 2000)
            }
            else{
                setTimeout(()=>{
                    values[selectedValues[0].index].flipped = false
                    values[selectedValues[1].index].flipped = false
                    setValues(values)
                    setDisable(false)
                }, 2000)
                
            }
        }
    },[disable])

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
                "index": idx,
                "flipped": false,
                "visible": true
            })
        })
        return jsonValues
    }


    const onFlip = (values,idx,disable) => {
        if(!disable){
            console.log("clique!")
            values[idx].flipped = !values[idx].flipped
            setValues(values)
            setFlag(!flag)
            if(values.filter((element)=> element.flipped === true).length > 1){
                console.log("entrei")
                setDisable(true)
            }
        }
    }

    const showTimer = (time) => {
        var date = new Date(time *1000)
        console.log(date)
        return <div>{date}</div>
    }

    return(
        <div className="game-root">
            <p>Memory Game</p>
            {points < nElements && <div>
                <p>{hour}:{minute}:{second}</p>    
            </div>}
            <div className="game-container">
                {(points < nElements) && values.map((item, idx) => {
                    return (
                        values && <div key={idx}>
                            <Card 
                                value={item.value} 
                                isFlip={item.flipped} 
                                onClick={() => onFlip(values,idx, disable)} 
                                done={item.visible}/>
                        </div>
                    )
                })}
                {(points >= nElements) && <div className="congratulations-message">
                    <p>Congrats!</p>
                </div>}
                
            </div>
        </div>
        
    )
}

export default Game;