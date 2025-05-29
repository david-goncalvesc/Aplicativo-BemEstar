import React, { useState } from 'react';
import ProfileScreen from './components/ProfileScreen';
import FavoritesScreen from './components/FavoritesScreen';
import EmergencyScreen from './components/EmergencyScreen';
import LocationsScreen from './components/LocationsScreen';
import DockNavigation from './components/DockNavigation';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'profile' | 'favorites' | 'emergency' | 'locations'>('profile');

  return (
    <div className="min-h-screen bg-gray-100">
      {currentScreen === 'profile' && <ProfileScreen />}
      {currentScreen === 'favorites' && <FavoritesScreen />}
      {currentScreen === 'emergency' && <EmergencyScreen />}
      {currentScreen === 'locations' && <LocationsScreen />}
      
      <DockNavigation currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
    </div>
  );
}

export default App;