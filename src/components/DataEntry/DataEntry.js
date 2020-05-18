import React from 'react';
import TotalEntry from './TotalEntry.js/TotalEntry';
import Aux from '../../hoc/Auxilary/Auxilary'
import SingleEntry from './SingleEntry/SingleEntry';

const DataEntry = (props) => {
    return (
        <Aux>
            <TotalEntry change={props.totalchange} click={props.totalclick}/>
            <SingleEntry change={props.singlechange} click={props.singleclick}/>
        </Aux>
    );
}

export default DataEntry;