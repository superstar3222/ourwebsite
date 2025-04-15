// app/page.tsx
"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import AboutContent from '@/app/about/page';
import HomeContent from '@/app/home/page';
import ServiceContent from '@/app/service/page';
import Footer from '@/components/Footer';

export default function Home() {
  // State to track which page content to display
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the correct content based on currentPage
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeContent />;
      case 'about':
        return <AboutContent />;
      case 'service':
        return <ServiceContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderContent()}
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}