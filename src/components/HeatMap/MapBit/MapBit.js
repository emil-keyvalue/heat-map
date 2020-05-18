import React from 'react';
import classes from './MapBit.module.css'

const MapBit = (props) => {
    const color = "rgba(51,153,204,"+props.value+")";
    return (
        <div className={classes.background}>
            <div className={classes.box} style={{backgroundColor:color}}>
                {Math.floor(props.value*100)}
            </div>
        </div>
    );
}

export default MapBit;