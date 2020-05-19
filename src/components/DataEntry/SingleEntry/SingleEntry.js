import React from 'react';
//import classes from './SingleEntry.module.css'

const SingleEntry = (props) => (
    <div>
        <input type='number' placeholder="Enter New Value" onChange={props.change} value={props.value}/>
        <button onClick={props.click}>Add New Data Point</button>
    </div>
);

export default SingleEntry;