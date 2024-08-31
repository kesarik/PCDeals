import React from 'react';
import Navbar from './Components/navbar';
import CategorySection from './Components/categorysection';
import Footer from './Components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategorySection />
      <Footer />
    </div>
  );
}

export default App;
