// IMPORTS
import {Button} from './button.jsx';

// COMPONENT
const Component = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		className: {control: 'text', description: 'Classname of the component'},
		modifiers: {control: 'array', description: 'List of modifiers'},
		children: {control: 'text', description: 'Inherited children displayed inside the component'},
	},
};

// PRIMARY
const Primary = {
	args: {
		className: 'button',
		modifiers: ['bright'],
		children: 'Click me!',
	},
};

// SECONDARY
const Secondary = {
	args: {
		className: 'button',
		modifiers: ['dark'],
		children: 'Click me!',
	},
};

// EXPORTS
export default Component;
export {Primary, Secondary};