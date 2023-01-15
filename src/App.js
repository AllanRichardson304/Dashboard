import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from "./shared/routes/Routes";
import 'antd/dist/reset.css';
function App() {
  return (
    <Router>
    <Routes></Routes>
  </Router>
  );
}

export default App;
