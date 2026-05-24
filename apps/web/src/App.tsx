import '@/styles/theme.css';
import '@/styles/brand.css';

import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import { FontLoader } from '@/components/FontLoader';
import HelloPage from '@/pages/HelloPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <>
      <FontLoader />
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}
