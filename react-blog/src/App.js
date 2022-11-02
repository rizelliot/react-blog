
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroCard from './components/herocard/herocard';
import NavBar from './components/navbar/navbar';
import BlogCard from './components/blogcard/card'
import { Container, Row, Col } from 'react-bootstrap';
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
  <Container style={{marginTop: '1rem'}} >
  <HeroCard></HeroCard>
  </Container>

  <Container style={{marginTop: '1rem'}}>
  <Row>
    <Col>
  <BlogCard></BlogCard>
    </Col>
  </Row>
  </Container>

  
  </div>
  </ThemeContext.Provider>
);

}

export default App;
