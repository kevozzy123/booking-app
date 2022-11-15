import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/homePage/HomePage'
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
