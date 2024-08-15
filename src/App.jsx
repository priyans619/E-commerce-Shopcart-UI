import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4">

        </main>
      </div>
    </Router>
  );
};

export default App
