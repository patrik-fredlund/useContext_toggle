import React, { useContext } from 'react';
import FunctionContextComponent from './FunctionContextComponent';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useContext(true);

  const ToggleTheme = () => {
    setDarkTheme((preventDarkTheme) => !preventDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <FunctionContextComponent />
    </ThemeContext.Provider>
  );
}
