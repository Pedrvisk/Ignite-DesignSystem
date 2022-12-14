import { ReactNode, InputHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

// Stories: Root/RootProps
export interface TextInputRootProps { children: ReactNode; }
const TextInputRoot = ({ children }: TextInputRootProps) => {
	return (
		<div className='flex items-center gap-3 py-4 px-3 h-12 w-full rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
			{children}
		</div>
	)
}

// Stories: Icon/IconProps
export interface TextInputIconProps { children: ReactNode; }
const TextInputIcon = ({ children }: TextInputIconProps) => {
	return (
		<Slot className='w-6 h-6 text-gray-400'>
			{children}
		</Slot>
	)
}

// Stories: Default/DefaultProps
export interface TextInputDefaultProps extends InputHTMLAttributes<HTMLInputElement> { }
const TextInputDefault = (props: TextInputDefaultProps) => {
	return <input {...props} className='bg-transparent flex-1 outline-none text-xs font-bold text-gray-100 placeholder:text-gray-400' />
}

TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';
TextInputDefault.displayName = 'TextInput.Input';

export const TextInput = {
	Root: TextInputRoot,
	Icon: TextInputIcon,
	Input: TextInputDefault
}