import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Route , Routes } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='Home' element={<Home /> }/> 
      </Routes>
      
    </div>
  );
}

export default App;
