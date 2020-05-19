import React from 'react';
import MapBit from './MapBit/MapBit';
import classes from './HeatMap.module.css'

const HeatMap = (props) => {
    const mapBits=[];
    let k=0;
    let i=0;
    for(i;i<props.valuelist.length;i++){
        let percent = props.valuelist[i]/props.total;
        mapBits.push(<MapBit key={k} value={percent}/>);
        k++;
    }
    let box = (<div className={classes.HeatMap}>
        {mapBits}
    </div>)
    return (
        <>
            {props.shouldrender ? box : null}
        </>
    );
}

export default HeatMap;

/*
Props needed:
Value Array
*/