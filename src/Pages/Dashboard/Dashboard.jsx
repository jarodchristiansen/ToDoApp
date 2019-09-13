import React from 'react';
import './App.css';
import NavBar from './Components/Navigation/Navbar';
import Sidebar from '../../Components/SideBar/Sidebar';


function Dashboard() {

  return (
    
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <body>
        <Sidebar />
      </body>
    </div>
  );
}

export default App;
