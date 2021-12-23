import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import {useContext, useEffect, useState} from 'react';

export default function HeaderCartButton(props){

	const cartCtx = useContext(CartContext);
	const {items} = cartCtx;
	const numberOfCartItems = items.reduce((crrNumber, item) => {
		return crrNumber + item.amount
	}, 0);

	const [buttonIsHiglighted, setButtonIsHiglighted] = useState(false)


	useEffect(() => {
		if(items.length === 0){
			return;
		}
		setButtonIsHiglighted(true);
		const timer = setTimeout(() => {
			setButtonIsHiglighted(false)
		}, 300);

		return () => {
			clearTimeout(timer);
		}
	}, [items])

	const buttonClasses = `${classes.button} ${buttonIsHiglighted ? classes.bump: ''}`

	return <button className={buttonClasses} onClick={props.onShowCart}>
		<span className={classes.icon}>
			<CartIcon/>
		</span>
		<span>Your Cart</span>
		<span className={classes.badge}>
			{numberOfCartItems}
		</span>
	</button>
}
