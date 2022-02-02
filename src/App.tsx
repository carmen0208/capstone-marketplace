import React from 'react';
import Header from './components/Header';
import { ImxClientProvider } from './context/ImxClientProvider';

function App() {
  return (
    <ImxClientProvider>
      <div className="App">
        <Header />
      </div>
    </ImxClientProvider>
  );
}

export default App;
