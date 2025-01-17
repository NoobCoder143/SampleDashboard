import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardContent from './components/DashboardContent';  // Adjust path as necessary
import Billing from './components/Billing';  // Adjust path as necessary
import Profile from './components/Profile';  // Adjust path as necessary
import Rtl from './components/Rtl';  // Adjust path as necessary
import Signin from './components/Signin';  // Adjust path as necessary
import Tables from './components/Tables';  // Adjust path as necessary
import Signup from './components/Signup';
import VirtualReality from './components/VirtualReality';
import SampleDashboard from './components/SampleDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/rtl" element={<Rtl />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/virtualreality" element={<VirtualReality />} />
            <Route path="/sampledashboard" element={<SampleDashboard />} />



          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
