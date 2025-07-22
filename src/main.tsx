// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// src/main.tsx
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'
import './index.css'  

// No pasamos segundo parámetro: dejaremos que el SSG maneje todo.
// Si más adelante necesitas lógica extra, puedes reañadir el callback.
export const createRoot = ViteReactSSG({ routes })

