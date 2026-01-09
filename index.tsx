
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("RenAI OS Initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Critical: Root element not found");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("RenAI OS Rendered");
}
