
import Projects from './Components/Projects';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Navbar from './Navbar.jsx';
import Portfolio from './Pages/Portfolio.jsx';   
import CatFactPage from "./Pages/CatFactPage";



function App() {
  return(
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/cat-facts" element={<CatFactPage />} />
    </Routes>
    </BrowserRouter>
   /* <div>
    <Projects />
  </div>*/
  );
}

export default App;
