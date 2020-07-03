import React from 'react'
import './btns.scss'

export function CancelBtn({ children, ...rest }) {
	return (
		<button className="btns cancel" {...rest}>
			{children}
		</button>
	);
}

export function SubmitBtn({ children, ...rest }) {
	return (
		<button className="btns submit" {...rest}>
			{children}
		</button>
	);
}