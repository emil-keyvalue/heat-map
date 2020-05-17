import React, {useState} from 'react';
import Aux from '../hoc/Auxilary/Auxilary'
import HeatMap from '../components/HeatMap/HeatMap';
import classes from './MainDisplay.module.css'

const MainDisplay = () => {
    
    // eslint-disable-next-line
    const [valueSet,setValueSet] = useState([0,10,20,30,40,50,60,70,80,90,10,20,40,50]);
    // eslint-disable-next-line
    const [valueSubmit,setValueSubmit] = useState(false);
    // eslint-disable-next-line
    const [valueDel,setValueDel] = useState(false);
    // eslint-disable-next-line
    const [totalValue,setTotalValue] = useState(100)
    const colorScheme = {
        0:"rgb(255,255,255)",
        1:"rgb(230,230,255)",
        2:"rgb(205,205,255)",
        3:"rgb(180,180,255)",
        4:"rgb(155,155,255)",
        5:"rgb(130,130,255)",
        6:"rgb(105,105,255)",
        7:"rgb(80,80,255)",        
        8:"rgb(55,55,255)",
        9:"rgb(30,30,255)"
    }
    return (
        <Aux>
            <div className={classes.MainDisplay}>
                <HeatMap colorScheme={colorScheme} valuelist={valueSet} total={totalValue}/>
                <div>Total number</div>
                <div>ValueEntry</div>
                <div>Add Value Button</div>
                <div>Total Values Added List</div>
                <div>Delete Selected</div>
            </div>
        </Aux>
    );
}

export default MainDisplay;