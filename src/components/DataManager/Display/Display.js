import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Display = (props) => {
    const radioitems = props.valueset.map((value,index) =>(<FormControlLabel key={toString(value)+index} value={index} control={<Radio />} label={value} />))

    return(
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="heatbox" name="heatbox"  onChange={props.change}>
            {radioitems}
            </RadioGroup>
        </FormControl>
    );
};

export default Display;

//value={props.value}