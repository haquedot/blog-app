import React from 'react';
import Navbar from './components/Navbar';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
