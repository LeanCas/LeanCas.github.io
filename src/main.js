import App from './App.svelte';
import { init, register } from 'svelte-i18n';
import '../styles.css';

// Register translations
register('en', () => import('./locales/en.json'));
register('fr', () => import('./locales/fr.json'));

// Initialize i18n
init({
  initialLocale: 'en',
  fallbackLocale: 'en'
});

const app = new App({
  target: document.body
});

export default app; 