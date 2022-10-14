import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
	children: ReactNode;
	asChild?: Boolean;
}

export function Button({ children, asChild }: ButtonProps) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp className='px-4 py-3 w-full rounded bg-cyan-500 hover:bg-cyan-300 focus:ring-2 ring-white text-sm text-black font-semibold transition-colors'>
			{children}
		</Comp>
	)
}