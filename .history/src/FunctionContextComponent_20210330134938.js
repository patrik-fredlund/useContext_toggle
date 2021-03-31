import React, { useContext } from 'react';
import { ThemeContext } from './App';

const FunctionContextComponent = () => {
  const darkThemee = useContext(ThemeContext);
  const ThemeStyles = {
    backgroundColor: darkThemee ? '#333' : '#CCC',
    color: darkThemee ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return <div style={ThemeStyles}>Function Theme</div>;
};

export default FunctionContextComponent;
