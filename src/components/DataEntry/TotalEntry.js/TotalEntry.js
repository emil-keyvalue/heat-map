import React from 'react';
import Auxilary from '../../../hoc/Auxilary/Auxilary';

const TotalEntry = (props) => (
    <Auxilary>
        <input type='number' placeholder="Enter Total Value" onChange={props.change}/>
        <button onClick={props.click}>Update Total</button>
    </Auxilary>
);

export default TotalEntry;