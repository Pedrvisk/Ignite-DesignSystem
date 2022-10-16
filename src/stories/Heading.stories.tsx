import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

// Stories: Heading
export default {
	title: 'Components/Heading',
	component: Heading,
	args: {
		children: 'Heading',
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
} as Meta<HeadingProps>

// Heading: Default
export const Default: StoryObj<HeadingProps> = {}

// Heading: Small
export const Small: StoryObj<HeadingProps> = {
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

// Heading: Large
export const Large: StoryObj<HeadingProps> = {
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

// Heading: CustomComponent
export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: (
			<h5>Heading Testing</h5>
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