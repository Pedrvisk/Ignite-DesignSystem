import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from './TextInput';

// Stories: Styles
import { Envelope } from 'phosphor-react';

// Stories: TextInput
export default {
	title: 'Components/TextInput',
	component: TextInput.Root,
	args: {
		children: [
			<TextInput.Icon>
				<Envelope />
			</TextInput.Icon>,
			<TextInput.Input placeholder='TextInput Testing' />
		]
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	}
} as Meta<TextInputRootProps>

// TextInput: Default
export const Default: StoryObj<TextInputRootProps> = {}

// TextInput: WithoutIcon
export const WithoutIcon: StoryObj<TextInputRootProps> = {
	args: {
		children: <TextInput.Input placeholder='TextInput Testing' />
	}
}
