import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count, onClickFooter }) => (
	<div className={styles.wrap}>
		<div>
			<button className={styles.btn} onClick={onClickFooter}>{count} items left</button>
		</div>
		<div className={styles.filter}>
			<button className={styles.btn}>All</button>
			<button className={styles.btn}>Active</button>
			<button className={styles.btn}>Completed</button>
		</div>
		<div>
			<button className={styles.btn}>Clear completed</button>
		</div>
	</div>);

export default Footer;