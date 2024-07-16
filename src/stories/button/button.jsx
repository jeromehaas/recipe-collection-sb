// IMPORTS
import './button.scss';
import PropTypes from 'prop-types';


// BUTTON
export const Button = ({ className = '', children = null, modifiers = []}) => {

	// RENDER
	return (
		<button type='button' className={[className, 'button', ...modifiers.map(modifier => `button--${modifier}`)].join(' ')}>
			{children}
		</button>
	);
};

// PROP-TYPES
Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	modifiers: PropTypes.arrayOf(PropTypes.string),
};