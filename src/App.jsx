import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Component/Contact';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Portal from './Component/Portal';
import MainPage from './Component/MainPage';

function App() {
  return (

    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/portal" element={<Portal />} >
            <Route path="about" element={<About />} />
            <Route path="skill" element={<Skills />} />
            <Route path="project" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>

        </Routes>

      </BrowserRouter>


    </>



  );
}

export default App;
