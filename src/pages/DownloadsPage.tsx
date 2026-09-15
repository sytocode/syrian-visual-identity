import React from 'react';
import { DownloadsVault } from '../components/DownloadsVault';

interface DownloadsPageProps {
  lang: 'ar' | 'en';
}

export const DownloadsPage: React.FC<DownloadsPageProps> = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <DownloadsVault lang={lang} />
    </div>
  );
};
