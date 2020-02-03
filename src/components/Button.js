import React from 'react';
import './Buttons.scss';
import classNames from 'classnames';

// 버튼 사이즈 props 설정
// Small, Medium, Large

function Button({
	children,
	size,
	color,
	outline,
	fullwidth,
	className,
	...rest
}) {
	// return <button className={['Button', size].join(' ')}>{children}</button>;
	// return <button className={`Button ${size}`}>{children}</button>;
	console.log(rest);
	return (
		<button
			className={classNames(
				'Button',
				size,
				color,
				{
					outline,
					fullwidth
				},
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	size: 'medium',
	color: 'blue'
};
export default Button;
