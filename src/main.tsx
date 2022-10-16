import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Vite: CreateRoot
createRoot(document.getElementById('system') as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
