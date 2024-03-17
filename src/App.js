import React from 'react';
import "./index.css"
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple to-pink flex flex-col justify-center items-center font-inter text-black">
      <Card/>
      <Footer/>
   </div>
  );
}

export default App;
