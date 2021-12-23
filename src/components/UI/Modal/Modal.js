import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
	return <div className={classes.backdrop} onClick={props.onHideCart}></div>
}

const ModalOverlay = props => {
	return <div className={classes.modal}>
		<div className={classes.content}>{props.children}</div>
	</div>
}

export default function Modal(props){
	return <Fragment>
		{ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, document.getElementById('backdrop'))}
		{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('modal-overlay'))}
	</Fragment>
}