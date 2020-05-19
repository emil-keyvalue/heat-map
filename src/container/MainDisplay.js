import React, {useState} from 'react';
import HeatMap from '../components/HeatMap/HeatMap';
import classes from './MainDisplay.module.css'
import DataEntry from '../components/DataEntry/DataEntry';
import DataManager from '../components/DataManager/DataManager';

const MainDisplay = () => {
    
    // eslint-disable-next-line
    const [valueSet,setValueSet] = useState([]);
    // eslint-disable-next-line
    const [shouldRender,setshouldRender] = useState(false);
    // eslint-disable-next-line
    const [valueDel,setValueDel] = useState(0);
    // eslint-disable-next-line
    const [totalValue,setTotalValue] = useState(100)
    const [totalholder,settotalholder] = useState(100);
    const [singleholder,setsingleholder] = useState(0);

    const totalClickHandler = () => {
        let temp=totalholder;
        settotalholder(temp)
        setTotalValue(temp)
    }

    const totalChangeHandler = (event) =>{
        settotalholder(event.target.value);
    }

    const singleClickHandler = () => {
        const newValueSet = valueSet;
        newValueSet.push(singleholder);
        setsingleholder(0);
        setValueSet(newValueSet);
        if(newValueSet>0)
        {
            setshouldRender(true);
        }
    }

    const singleChangeHandler = (event) =>{
        setsingleholder(event.target.value);
    }

    const deleteClickedHandler = () => {
        let tempValueSet = [...valueSet].filter((cur) => (cur!==valueSet[valueDel]) );
        setValueSet(tempValueSet);
    }

    const deleteChangeHandler = (event) => {
        setValueDel(event.target.value);
    } 

    return (
        <>
            <div className={classes.MainDisplay}>
                <HeatMap valuelist={valueSet} total={totalValue} shouldrender={shouldRender}/>
                <DataEntry 
                    totalchange={(event) => totalChangeHandler(event)} 
                    totalclick={totalClickHandler}
                    totalvalue={totalholder}
                    singlechange={(event) => singleChangeHandler(event)} 
                    singleclick={singleClickHandler}
                    singlevalue={singleholder}
                />
                <DataManager 
                    clicked={deleteClickedHandler} 
                    valueset={valueSet} 
                    change={(event) => deleteChangeHandler(event)}
                    delvalue={valueDel}/>
            </div>
        </>
    );
}

export default MainDisplay;