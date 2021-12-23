import classes from './Header.module.css';
import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props){
	return <Fragment>
		<header className={classes.header}>
			<h1>ReactMeals</h1>
			<HeaderCartButton onShowCart={props.onShowCart}/>
		</header>
		<div className={classes['main-image']}>
			<img src='./assets/meals.jpg' alt='a table of full of delicious food'/>
		</div>
	</Fragment>
}