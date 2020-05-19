import React from 'react';
import Display from './Display/Display';
import Deleter from './Deleter/Deleter';

const DataManager = (props) => (
    <div>
        <div><Display valueset={props.valueset} change={props.change}/></div>
        <div><Deleter clicked={props.clicked}/></div>
    </div>
);

export default DataManager;