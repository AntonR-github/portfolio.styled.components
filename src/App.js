import React from 'react';
import GlobalStyles from './globalStyles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/*' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
