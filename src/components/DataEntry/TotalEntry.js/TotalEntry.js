import React from 'react';

const TotalEntry = (props) => (
    <div>
        <input type='number' placeholder="Enter Total Value" onChange={props.change} value={props.value}/>
        <button onClick={props.click}>Update Total</button>
    </div>
);

export default TotalEntry;