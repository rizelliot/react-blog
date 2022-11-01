
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import { createContext } from 'react';
import {useState} from 'react';

export const ThemeContext = createContext(null);




function App() {
  const [theme, setTheme] = useState("dark");

 const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
 };
return (
  <ThemeContext.Provider value={{theme, setTheme}}>
  <div className='App' id={theme}>
  <NavBar></NavBar>
  </div>
  </ThemeContext.Provider>
);

}

export default App;
