import './App.css';
import axios from "axios";
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';

function App() {
  const baseURL = "http://localhost:7000/task";

  const getJsonData = () => {
    axios.get(baseURL).then((res) => {
      const response = res.data;
      console.log(response);
    }).catch((err) => {
      console.log("error", err);
    });
  };

  useEffect(() => {
    getJsonData();
  })
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
