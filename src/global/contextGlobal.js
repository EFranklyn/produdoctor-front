import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [colors, setColors] = useState({
    sideBarBackground: '#4E984F',
    sideBarFontColor: '#FFFFFF',
    primary: '#333', 
    colorBackgroundTheme: '#1A1A29'
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ screenSize, colors }}>
      {children}
    </AppContext.Provider>
  );
}