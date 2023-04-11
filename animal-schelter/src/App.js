// import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from '../src/routes/home/home.component'
import { About } from './routes/about/about.component';
import { NavBar } from './components/navbars/Navbar'
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavBar />} />
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />} />


    </Routes>
  );

}

export default App;
