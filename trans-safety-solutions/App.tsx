import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StartupPage from './pages/StartupPage';
import ServicePage from './pages/ServicePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/startup" element={<StartupPage />} />
      <Route path="/services/:id" element={<ServicePage />} />
    </Routes>
  );
}
