import { RouterProvider } from 'react-router-dom';
import React, { useContext } from 'react';
import './App.css';
import { router } from './Router/Router';
import { DarkContext } from './Context/DarkMode/DarkMode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { darkMode } = useContext(DarkContext);
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
