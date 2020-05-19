import React from 'react';
import Display from './Display/Display';
import Deleter from './Deleter/Deleter';

const DataManager = (props) => (
    <div>
        <div><Deleter clicked={props.clicked}/></div>
        <div><Display valueset={props.valueset} change={props.change} delvalue={props.delvalue}/></div>
    </div>
);

export default DataManager;