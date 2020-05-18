import React from 'react';
import MapBit from './MapBit/MapBit';
import classes from './HeatMap.module.css'

const HeatMap = (props) => {
    const mapBits=[];
    let k=0;
    console.log(props.valuelist)
    let i=0;
    for(i;i<props.valuelist.length;i++){
        let percent = props.valuelist[i]/props.total;
        console.log("HeatMap.js"+percent+":"+props.total+":"+props.valuelist[i])
        mapBits.push(<MapBit key={k} value={percent}/>);
        k++;
    }
    return (
        <div className={classes.HeatMap}>
            {mapBits}
        </div>
    );
}

export default HeatMap;

/*
Props needed:
Value Array
*/