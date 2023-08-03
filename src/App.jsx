import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home/home';
import Projects from './components/projects/projects';
import Project from './components/projects/project';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

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

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects projectsList={projectsList}/>} />
        <Route path="/projects/:slug" element={<Project projectsList={projectsList}/>} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App
