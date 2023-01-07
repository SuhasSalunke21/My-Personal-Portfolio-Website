import './index.css';

import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';
import About from './routes/About';
import Tech from './routes/Tech';

function App() {
  return (
   
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tech" element={<Tech />} />
    </Routes>
  </>
  );
}

export default App;
