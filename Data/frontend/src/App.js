import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import CheckLoginProvider from './context/CheckLogin'
import Start from './components/Start'
function App() {
  return (
    <div>
      <CheckLoginProvider>
        <Start></Start>
      </CheckLoginProvider>
    </div> 
  );
}

export default App;
