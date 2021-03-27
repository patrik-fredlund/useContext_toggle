import React, { useContext } from 'react';

export const ThemeContext = React.useContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useContext(true);

  return (
    <ThemeContext.Provider>
      <FunctionContextComponent />
    </ThemeContext.Provider>
  );
}
