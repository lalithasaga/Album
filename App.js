import React from 'react';
import './App.css';
import Header from './components/Header';
import Heading from './components/Heading';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Heading/>
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
