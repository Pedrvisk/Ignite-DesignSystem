import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// Stories: Button
export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Button'
	},
	argTypes: {
		asChild: {
			table: {
				disable: true
			}
		}
	}
} as Meta<ButtonProps>

// Button: Default
export const Default: StoryObj<ButtonProps> = {}
