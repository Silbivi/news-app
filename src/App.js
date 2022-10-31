import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Detail from './components/Detail';
import AnotherDetail from './components/AnotherDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className='bg-gray-100'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/detail/:postid' element={<Detail />} />
            <Route path='/anotherdetail/:postid' element={<AnotherDetail />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
