import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { mocking_enabled } from './utils/constants.ts';

const container = document.getElementById('root')!;
const root = createRoot(container);

async function enableMocking() {
  if (mocking_enabled) {
    const { worker } = await import('../tests/mswUtils/browser.ts');
    return worker.start();
  }
}

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
