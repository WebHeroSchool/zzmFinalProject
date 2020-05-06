import React from 'react';
import TextField from '@material-ui/core/TextField';

// const InputItem = () => (<div>
// 	<TextField
// 		id="standart-basic"
// 		label="What need to be done?"
// 	/>
// </div>);

// export default InputItem;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '97%',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="What need to be done?" />
    </form>
  );
}