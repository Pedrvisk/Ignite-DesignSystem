import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: Boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp {...props} className={clsx('px-4 py-3 w-full rounded bg-cyan-500 hover:bg-cyan-300 focus:ring-2 ring-white text-sm text-black font-semibold transition-colors', className)}>
			{children}
		</Comp>
	)
}