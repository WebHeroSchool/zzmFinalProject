import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';


const Item = ({ value, isDone }) => (
	<div className={styles.wrap}>
		<Checkbox
	        color="default"
	        inputProps={{ 'aria-label': 'checkbox with default color' }}
	      />
		<label className = {
			classnames({
				[styles.item]: true,
				[styles.done]: isDone
			})
		}> {value}
		</label>
		<button className={styles.btn}>Delete</button>
	</div>
);

export default Item;