// import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from '../src/routes/home/home.component'
import { About } from './routes/about/about.component';
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

    </Routes>
  );

}

export default App;
