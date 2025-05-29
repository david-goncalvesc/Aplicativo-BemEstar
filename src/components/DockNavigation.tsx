import React from 'react';
import { Home, User, MessageCircle, MapPin, Settings } from 'lucide-react';

interface DockNavigationProps {
  currentScreen: string;
  onScreenChange: (screen: 'profile' | 'favorites' | 'emergency' | 'locations') => void;
}

const DockNavigation: React.FC<DockNavigationProps> = ({ currentScreen, onScreenChange }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-4 bg-black/80 backdrop-blur-lg rounded-full shadow-2xl border border-white/10">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onScreenChange('favorites')}
          className={`group relative p-3 rounded-full transition-all duration-300 hover:bg-white/10
            ${currentScreen === 'favorites' ? 'bg-white/20' : ''}`}
        >
          <Home className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 
            ${currentScreen === 'favorites' ? 'text-white' : 'text-white/70'}`} />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Início
          </span>
        </button>

        <button
          onClick={() => onScreenChange('profile')}
          className={`group relative p-3 rounded-full transition-all duration-300 hover:bg-white/10
            ${currentScreen === 'profile' ? 'bg-white/20' : ''}`}
        >
          <User className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 
            ${currentScreen === 'profile' ? 'text-white' : 'text-white/70'}`} />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Perfil
          </span>
        </button>

        <button
          onClick={() => onScreenChange('emergency')}
          className={`group relative p-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 transform scale-125 transition-all duration-300 hover:scale-130 hover:shadow-lg hover:shadow-red-500/50
            ${currentScreen === 'emergency' ? 'ring-2 ring-red-400' : ''}`}
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Emergência
          </span>
        </button>

        <button
          onClick={() => onScreenChange('locations')}
          className={`group relative p-3 rounded-full transition-all duration-300 hover:bg-white/10
            ${currentScreen === 'locations' ? 'bg-white/20' : ''}`}
        >
          <MapPin className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 
            ${currentScreen === 'locations' ? 'text-white' : 'text-white/70'}`} />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Locais
          </span>
        </button>

        <button
          onClick={() => onScreenChange('profile')}
          className={`group relative p-3 rounded-full transition-all duration-300 hover:bg-white/10
            ${currentScreen === 'settings' ? 'bg-white/20' : ''}`}
        >
          <Settings className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 
            ${currentScreen === 'settings' ? 'text-white' : 'text-white/70'}`} />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Configurações
          </span>
        </button>
      </div>
    </nav>
  );
};

export default DockNavigation;