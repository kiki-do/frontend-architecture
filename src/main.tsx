import { createRoot } from 'react-dom/client';

import './utils/i18n';
import './assets/styles/global.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(<App />);
