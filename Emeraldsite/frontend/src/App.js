import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contracts from './pages/Contrats';
import EscrowManagement from './pages/EscrowManagement';
import Transations from './pages/Transations';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/escrow" element={<EscrowManagement />} />
          <Route path="/transactions" element={<Transations />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
