import React from 'react';
import classes from './MapBit.module.css'

const MapBit = (props) => {
    let box = null;
    let value = props.value;
    console.log(value)
    if(value>=0.00 && value<=0.10){
    box = (<div className={classes.zero}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.11 && value<=0.20){
        box = (<div className={classes.one}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.21 && value<=0.30){
        box = (<div className={classes.two}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.31 && value<=0.40){
        box = (<div className={classes.three}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.41 && value<=0.50){
        box = (<div className={classes.four}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.51 && value<=0.60){
        box = (<div className={classes.five}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.61 && value<=0.70){
        box = (<div className={classes.six}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.71 && value<=0.80){
        box = (<div className={classes.seven}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.81 && value<=0.90){
        box = (<div className={classes.eight}>{Math.floor(props.value*100)}</div>);
    }
    else if(value>=0.91 && value<=1.00){
        box = (<div className={classes.nine}>{Math.floor(props.value*100)}</div>);
    }
    return (
        <div>{box}</div>
    );
}

export default MapBit;