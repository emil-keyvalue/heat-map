import React from 'react';

const TotalEntry = (props) => (
    <>
        <input type='number' placeholder="Enter Total Value" onChange={props.change}/>
        <button onClick={props.click}>Update Total</button>
    </>
);

export default TotalEntry;