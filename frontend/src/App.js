import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/homePage/HomePage'
import Header from './Header/Header';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
