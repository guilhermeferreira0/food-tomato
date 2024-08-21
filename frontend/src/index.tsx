import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Header } from './components/header/header';
import { HomePage } from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <main className="md:mx-[10%] flex flex-col gap-8">
          <Routes>
            <Route path='/' Component={HomePage} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
