import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';
import FavoritesScreen from './components/FavoritesScreen';
import EmergencyScreen from './components/EmergencyScreen';
import LocationsScreen from './components/LocationsScreen';
import DockNavigation from './components/DockNavigation';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/\" replace /> : <LoginScreen />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div className="pb-24">
                  <Routes>
                    <Route path="/\" element={<ProfileScreen />} />
                    <Route path="/favorites" element={<FavoritesScreen />} />
                    <Route path="/emergency" element={<EmergencyScreen />} />
                    <Route path="/locations" element={<LocationsScreen />} />
                  </Routes>
                  <DockNavigation />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;