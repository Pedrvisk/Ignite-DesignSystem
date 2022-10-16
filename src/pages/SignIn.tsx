import { FormEvent, useState } from 'react';
import axios from 'axios';

// Pages: Styles
import { Envelope, Lock } from 'phosphor-react';

// Pages: Components/Stories
import { Logo } from '../Logo';
import { Heading } from '../stories/Heading';
import { Text } from '../stories/Text';
import { TextInput } from '../stories/TextInput';
import { Checkbox } from '../stories/Checkbox';
import { Button } from '../stories/Button';

// Pages: SignIn
export const SignIn = () => {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);

	async function handlerSigIn(event: FormEvent) {
		event.preventDefault();

		await axios.post('/sessions', {
			email: 'dkaskdas',
			password: '12345678'
		});

		setIsUserSignedIn(true);
	}

	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 p-2 md:p-0'>
			<div className='flex flex-col items-center'>
				<Logo />
				<Heading className='mt-4' size='lg'>
					Ignite Lab
				</Heading>
				<Text className='mt-1 font-semibold text-gray-400' size='lg'>
					Log in and start using it!
				</Text>
			</div>
			<form onSubmit={handlerSigIn} className='flex flex-col gap-4 items-stretch w-full md:max-w-[400px] max-w-[100%] md:mt-10 mt-5'>
				{isUserSignedIn && <Text>Login realizado!</Text>}
				<label htmlFor='email' className='flex flex-col gap-3'>
					<Text className='font-semibold'>
						E-mail
					</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input id='email' type='email' placeholder='Enter your e-mail' />
					</TextInput.Root>
				</label>
				<label htmlFor='password' className='flex flex-col gap-3'>
					<Text className='font-semibold'>
						Password
					</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input id='password' type='password' placeholder='**********' />
					</TextInput.Root>
				</label>
				<label htmlFor='remember' className='flex items-center gap-2'>
					<Checkbox id='remember' />
					<Text className='text-gray-200' size='sm'>
						Remember me for 30 days
					</Text>
				</label>
				<Button type='submit' className='mt-4'>
					Login to the platform
				</Button>
			</form>
			<div className='flex flex-col items-center gap-4 mt-8'>
				<Text size='sm' asChild>
					<a href='' className='text-gray-400 hover:text-gray-200 underline transition-colors'>
						Forgot your password?
					</a>
				</Text>
				<Text size='sm' asChild>
					<a href='' className='text-gray-400 hover:text-gray-200 underline transition-colors'>
						Don't have an account? Create one now!
					</a>
				</Text>
			</div>
		</div>
	)
}