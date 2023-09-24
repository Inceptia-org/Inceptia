import React from 'react'
import Sidebar from './components/Sidebar'
import MemoryGame from './Games/MemoryGame'
// import Marketplace1 from './pages/Marketplace1'
// import Marketplace1 from './pages/components/Marketplace1'
import Marketplace1 from './frontend/components/Marketplace1';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Profile from './components/Profile';
import ClaimNFT from './frontend/components/ClaimNFT';
import UpdateNFT from './frontend/components/UpdateNFT';

const App = () => {
  return (
       <BrowserRouter>
      <Routes>
   
  
    
      <Route path="/" element={<Sidebar/>} />
      <Route path="/memorygame" element={<MemoryGame/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/marketplace" element={<Marketplace1/>} />
      <Route path="/claimNFT" element={<ClaimNFT/>} />
      <Route path="/updateNFT" element={<UpdateNFT/>} />


      
   
    </Routes>
    </BrowserRouter>
  )
}

export default App