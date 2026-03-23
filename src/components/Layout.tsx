import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-white border-t border-purple-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Teyvat Guidebook. This is a fan-made project and is not affiliated with HoYoverse.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Genshin Impact and all related assets are trademarks of HoYoverse.
          </p>
        </div>
      </footer>
    </div>
  );
}
