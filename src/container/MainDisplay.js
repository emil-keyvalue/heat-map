import React, {useState} from 'react';
import Aux from '../hoc/Auxilary/Auxilary'
import HeatMap from '../components/HeatMap/HeatMap';
import classes from './MainDisplay.module.css'
import DataEntry from '../components/DataEntry/DataEntry';

const MainDisplay = () => {
    
    // eslint-disable-next-line
    const [valueSet,setValueSet] = useState([]);
    // eslint-disable-next-line
    const [valueSubmit,setValueSubmit] = useState(false);
    // eslint-disable-next-line
    const [valueDel,setValueDel] = useState(false);
    // eslint-disable-next-line
    const [totalValue,setTotalValue] = useState(0)
    const totalholder = [];
    let singleholder = 0;

    const totalClickHandler = () => {
        setTotalValue(totalholder[0])
    }

    const totalChangeHandler = (event) =>{
        totalholder.pop();
        totalholder.push(event.target.value);
    }

    const singleClickHandler = () => {
        const newValueSet = valueSet;
        newValueSet.push(singleholder)
        setValueSet(newValueSet)
    }

    const singleChangeHandler = (event) =>{
        singleholder = event.target.value;
        console.log("Holder:"+singleholder+"  Set:"+valueSet)
    }

    return (
        <Aux>
            <div className={classes.MainDisplay}>
                <HeatMap valuelist={valueSet} total={totalValue}/>
                <DataEntry 
                    totalchange={(event) => totalChangeHandler(event)} 
                    totalclick={totalClickHandler}
                    singlechange={(event) => singleChangeHandler(event)} 
                    singleclick={singleClickHandler}/>
                <div>Total Values Added List</div>
                <div>Delete Selected</div>
            </div>
        </Aux>
    );
}

export default MainDisplay;