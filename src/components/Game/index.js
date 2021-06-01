import React from 'react';
import Card from '../Card';
import './Game.css';

const Game = ({ nElements }) => {
    const [values, setValues] = React.useState([]);
    const [initValue, setInitValue] = React.useState([])
    const [flag, setFlag] = React.useState(false);
    const [selectedCards, setSelectedCards] = React.useState([])
    const [disable, setDisable] = React.useState(false)


    React.useEffect(()=>{
        const generated = generateArray(nElements)
        setValues(generated)
        setInitValue(generated)
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

    const gameRules = () => {}

    return(
        <div className="game-container">
            {values.map((item, idx) => {
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
            
        </div>
    )
}

export default Game;