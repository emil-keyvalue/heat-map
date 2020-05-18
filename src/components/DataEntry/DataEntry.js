import React from 'react';
import TotalEntry from './TotalEntry.js/TotalEntry';
import SingleEntry from './SingleEntry/SingleEntry';

const DataEntry = (props) => {
    return (
        <>
            <TotalEntry change={props.totalchange} click={props.totalclick} value={props.totalvalue}/>
            <SingleEntry change={props.singlechange} click={props.singleclick} value={props.singlevalue}/>
        </>
    );
}

export default DataEntry;