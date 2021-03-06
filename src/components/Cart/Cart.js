import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

export default function Cart(props){
	
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0; 

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id)	
	}
	const cartItemAddHandler = (item) => {
		cartCtx.addItem({...item, amount: 1});
	}

	const cartItems = cartCtx.items.map(item => {
		return <CartItem key={item.id}
				name={item.name}
				price={item.price}
				amount={item.amount}
				onRemove={cartItemRemoveHandler.bind(null, item.id)}
				onAdd={cartItemAddHandler.bind(null, item)}
			/>
	})



	return <Modal onHideCart={props.onHideCart}>
		<ul className={classes['cart-items']}>{cartItems}</ul>
		<div className={classes.total}>
			<span>Total Amount</span>
			<span>{totalAmount}</span>
		</div>
		<div className={classes.actions}>
			<button className={classes['button-alt']} onClick={props.onHideCart}>Close</button>
			{hasItems && <button className={classes.button}>Order</button>}
		</div>
	</Modal>

}