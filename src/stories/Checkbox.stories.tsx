import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
	title: 'Components/CheckBox',
	component: Checkbox,
	decorators: [
		(Story) => (
			<div className='flex items-center gap-2'>
				{Story()}
				<Text size='sm'>
					Checkbox Testing
				</Text>
			</div>
		)
	]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
