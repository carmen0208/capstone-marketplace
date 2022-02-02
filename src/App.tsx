import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Assets from './pages/Assets'; 
import Inventory from './pages/Inventory'; 
import Transactions from './pages/Transactions'; 
import Header from './components/Header';
import { ImxClientProvider } from './context/ImxClientProvider';

function App() {
  return (
    <ImxClientProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/assets" element={<Assets />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/transactions" element={<Transactions />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ImxClientProvider>
  );
}

export default App;
