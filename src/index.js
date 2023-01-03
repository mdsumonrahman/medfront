import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DarkMode from './Context/DarkMode/DarkMode';
import 'react-day-picker/dist/style.css';
import AuthContext from './Context/AuthContext/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>

    <AuthContext>
      <DarkMode>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DarkMode>
    </AuthContext>
  </QueryClientProvider>

);

reportWebVitals();
