import React, { useContext } from 'react';
import { ThemeContext } from './App';

const FunctionContextComponent = () => {
  const darkThemee2 = useContext(ThemeContext);
  const ThemeStyles = {
    backgroundColor: darkThemee2 ? '#333' : '#CCC',
    color: darkThemee2 ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return <div style={ThemeStyles}>Function Theme</div>;
};

export default FunctionContextComponent;
