import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from "./shared/routes/Routes";
function App() {
  return (
    <Router>
    <Routes></Routes>
  </Router>
  );
}

export default App;
