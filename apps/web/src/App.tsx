import '@/styles/theme.css';
import '@/styles/brand.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import HomePage from '@/pages/HomePage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}
