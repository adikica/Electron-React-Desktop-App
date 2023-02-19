import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './pages/Login'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
