import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import SpeckPage from './pages/SpeckPage/SpeckPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/auth' element={<AuthPage />}></Route>
      <Route path='/speck' element={<SpeckPage />}></Route>
    </Routes>
  );
}

export default App;
