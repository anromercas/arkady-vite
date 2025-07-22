import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Disparar evento para el prerenderizado
if (typeof window !== 'undefined') {
  window.dispatchEvent(new Event('render-event'));
}
