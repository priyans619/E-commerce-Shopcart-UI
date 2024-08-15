import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App
