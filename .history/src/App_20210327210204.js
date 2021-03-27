import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const ToggleTheme = () => {
    setDarkTheme((preventDarkTheme) => !preventDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={ToggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
    </ThemeContext.Provider>
  );
}