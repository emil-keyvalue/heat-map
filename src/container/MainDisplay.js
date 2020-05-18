import React, {useState} from 'react';
import HeatMap from '../components/HeatMap/HeatMap';
import classes from './MainDisplay.module.css'
import DataEntry from '../components/DataEntry/DataEntry';

const MainDisplay = () => {
    
    // eslint-disable-next-line
    const [valueSet,setValueSet] = useState([]);
    // eslint-disable-next-line
    const [shouldRender,setshouldRender] = useState(false);
    // eslint-disable-next-line
    const [valueDel,setValueDel] = useState(0);
    // eslint-disable-next-line
    const [totalValue,setTotalValue] = useState(0)
    const [totalholder,settotalholder] = useState(0);
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
        setsingleholder(0)
        setValueSet(newValueSet);
        if(newValueSet>0)
        {
            setshouldRender(true);
        }
    }

    const singleChangeHandler = (event) =>{
        setsingleholder(event.target.value);
        console.log("Holder:"+singleholder+"  Set:"+valueSet)
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
                    singlevalue={singleholder}/>
                    

                <div>Total Values Added List</div>
                <div>Delete Selected</div>
            </div>
        </>
    );
}

export default MainDisplay;