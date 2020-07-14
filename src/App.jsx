import React from 'react';
import './css/App.css';
// Call component
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="main">
      <header className="text-gray-700 text-xl font-mono bg-gray-400">
        <Header />
      </header>
      
      <footer className="text-gray-700 font-mono bg-gray-400">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
