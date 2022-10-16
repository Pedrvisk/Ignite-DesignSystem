import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

// Stories: Text
export default {
	title: 'Components/Text',
	component: Text,
	args: {
		children: 'Text',
		size: 'md'
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'inline-radio'
			}
		},
		asChild: {
			table: {
				disable: true
			}
		}
	}
} as Meta<TextProps>

// Text: Default
export const Default: StoryObj<TextProps> = {}

// Text: Small
export const Small: StoryObj<TextProps> = {
	args: {
		size: 'sm'
	},
	argTypes: {
		size: {
			table: {
				disable: true
			}
		}
	}
}

// Text: Large
export const Large: StoryObj<TextProps> = {
	args: {
		size: 'lg'
	},
	argTypes: {
		size: {
			table: {
				disable: true
			}
		}
	}
}

// Text: CustomComponent
export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: (
			<p>Text Testing</p>
		)
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	}
}