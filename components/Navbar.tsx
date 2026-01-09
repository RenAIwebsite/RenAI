
import React, { useState } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold font-heading tracking-tight">Ren<span className="text-green-600">AI</span></span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-bold transition-all ${
                  currentPage === link.href ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center space-x-2">
              <span>免费预约演示</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 p-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button key={link.label} className="block w-full text-left py-2" onClick={() => handleLinkClick(link.href)}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
