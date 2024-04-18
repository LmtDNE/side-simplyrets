import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Properties from './pages/Properties';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Properties />} />
      </Routes>
    </Router>
  );
}
