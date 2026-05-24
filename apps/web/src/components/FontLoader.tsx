import { useEffect } from 'react';

export function FontLoader() {
  useEffect(() => {
    const existing = document.getElementById('aurora-fonts');
    if (existing) return;
    const link = document.createElement('link');
    link.id = 'aurora-fonts';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap';
    document.head.appendChild(link);
  }, []);

  return null;
}
