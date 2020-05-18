import React from 'react';
import Display from './Display/Display';
import Deleter from './Deleter/Deleter';

const DataManager = (props) => (
    <div>
        <Display/>
        <Deleter/>
    </div>
);

export default DataManager;