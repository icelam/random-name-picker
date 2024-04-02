// polyfills
import 'web-animations-js/web-animations.min';
import 'element-remove-polyfill';

// styles
import '@styles/index.scss';

// main
import '@js/app';

// PWA
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then((registration) => {
      console.info('SW registered: ', registration);
    }).catch((registrationError) => {
      console.info('SW registration failed: ', registrationError);
    });
  });
}
