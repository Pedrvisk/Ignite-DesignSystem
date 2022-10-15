import * as CheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckBox.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
	return (
		<CheckBox.Root {...props} className='w-6 h-6 p-[2px] rounded bg-gray-800'>
			<CheckBox.Indicator asChild>
				<Check weight='bold' className='w-5 h-5 text-cyan-500' />
			</CheckBox.Indicator>
		</CheckBox.Root>
	)
}