import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Title from './pages/Title';
import Work from './pages/Work';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Title />} />
      <Route path="/work" element={<Work />} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/contact" component={ContactMe} /> */}
    </Routes>
    {/* <Title /> */}
    {/* <Work /> */}
  </Router>

);

export default App;
