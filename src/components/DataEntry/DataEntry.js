import React from 'react';
import TotalEntry from './TotalEntry.js/TotalEntry';
import SingleEntry from './SingleEntry/SingleEntry';

const DataEntry = (props) => {
    return (
        <>
            <TotalEntry change={props.totalchange} click={props.totalclick}/>
            <SingleEntry change={props.singlechange} click={props.singleclick}/>
        </>
    );
}

export default DataEntry;