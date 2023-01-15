import './index.css';

import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
// import Tech from './routes/Tech';


function App() {
  return (
   
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    {/* <BackgroundAnimation /> */}
  </>
  );
}

export default App;
