import './App.css';
import 'leaflet/dist/leaflet.css';
import { Route, Routes } from 'react-router-dom';
import MapComponent from './service/MapComponent';
import Home from './pages/Home';
import ProfileDetails from './service/ProfileDetails';
import Navbar from './service/Navbar';

function App() {
  return (
    <div>
     <Navbar/>
      <Routes>
        {/* Main home route */}
        <Route path="/" element={<Home />} />
        
        {/* Route for MapComponent to display the map with a given profile id */}
        <Route path="/showmap/:id" element={<MapComponent />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </div>
  );
}

export default App;
