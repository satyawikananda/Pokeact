import React from 'react';
// Call component
import Header from "./components/master/Header"
import Footer from "./components/master/Footer"
import Content from "./components/Content"

const App = () => {
  return (
    <div className="main">
      <header className="text-gray-700 text-xl font-mono bg-gray-400">
        <Header />
      </header>
      
      <section className="text-gray-700 font-medium">
        <div className="container px-5 py-24 mx-auto">
          <Content />
        </div>
      </section>

      <footer className="text-gray-700 font-mono bg-gray-400">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
