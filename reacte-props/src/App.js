import React from 'react'
import './App.css';
import ComponentProfil from './Profil/ComponentProfil';
import BillGates from './Bill_Gates.jpg';



function App() {
  return (
    <div className="container">
      <ComponentProfil
       img={BillGates} 
        />
      
    </div>
  );
}

export default App;
