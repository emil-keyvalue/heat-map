import React from 'react';
import Auxilary from '../../../hoc/Auxilary/Auxilary';

const SingleEntry = (props) => (
    <Auxilary>
        <input type='number' placeholder="Enter New Value" onChange={props.change}/>
        <button onClick={props.click}>Add New Data Point</button>
    </Auxilary>
);

export default SingleEntry;