import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { rest } from 'msw';
import { expect } from '@storybook/jest';
import { SignIn } from './SignIn';

// Stores: SignIn
export default {
	title: 'Pages/SignIn',
	component: SignIn,
	parameters: {
		msw: {
			handlers: [
				rest.post('/sessions', (req, res, ctx) => {
					return res(ctx.json({
						message: 'Login realizado!'
					}));
				})
			]
		}
	}
} as Meta

export const Default: StoryObj = {
	// SignIn: Testing Library
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// SignIn: E-mail
		userEvent.type(canvas.getByPlaceholderText('Enter your e-mail'), 'ignitelab@example.com');

		// SignIn: Password
		userEvent.type(canvas.getByPlaceholderText('**********'), '123456789');

		// SignIn: Checkbox
		userEvent.click(canvas.getByRole('checkbox'));

		// SignIn: Submit
		userEvent.click(canvas.getByRole('button'));

		await waitFor(() => {
			return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
		})
	}
}