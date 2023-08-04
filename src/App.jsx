import { useState, useEffect, useContext } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar';
import Home from './pages/Home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Projects from './pages/projects/projects';
import Project from './pages/projects/project';
import Footer from './components/footer/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { DarkModeContext } from './contexts/DarkModeProvider';

function App() {

  const {darkMode} = useContext(DarkModeContext);
  const [projectsList, setProjectsList] = useState("");
  const link = "http://localhost:1337/api/projects";


  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setProjectsList(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.getElementsByClassName("nav-toggle")[0].classList.add('dark-theme')
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.getElementsByClassName("nav-toggle")[0].classList.remove('dark-theme')

    }
  }, [darkMode]);


  return (
    <div id="root" className={`app ${darkMode && 'dark-theme'}`}>
      <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects projectsList={projectsList}/>} />
            <Route path="/projects/:slug" element={<Project projectsList={projectsList}/>} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
