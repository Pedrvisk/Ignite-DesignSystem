import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

// Interface: ButtonProps
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: Boolean;
}

// Stories: Button
export const Button = ({ children, asChild, className, ...props }: ButtonProps) => {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp {...props} className={clsx('px-4 py-3 w-full rounded bg-cyan-500 hover:bg-cyan-300 focus:ring-2 ring-white text-sm text-black font-semibold transition-colors', className)}>
			{children}
		</Comp>
	)
}