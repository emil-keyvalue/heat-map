import React from 'react';

const SingleEntry = (props) => (
    <>
        <input type='number' placeholder="Enter New Value" onChange={props.change}/>
        <button onClick={props.click}>Add New Data Point</button>
    </>
);

export default SingleEntry;