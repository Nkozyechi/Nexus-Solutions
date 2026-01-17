import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Moon, Sun } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';
import ChatWidget from './ChatWidget';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initialize Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Scroll handler
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary text-text-main font-sans selection:bg-accent selection:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-primary/90 border-border-color backdrop-blur-md py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-extrabold text-text-main tracking-tighter">
            <Cpu className="w-8 h-8 text-accent" />
            <span className="uppercase">{COMPANY_INFO.name}</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-text-muted hover:text-text-main'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary text-text-muted hover:text-accent transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <NavLink
              to="/contact"
              className="px-6 py-2 bg-accent text-white text-sm font-bold rounded-full hover:bg-accent-hover transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              Start Project
            </NavLink>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-secondary text-text-muted hover:text-accent transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="text-text-main hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-border-color shadow-xl p-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium py-3 px-4 rounded-lg border border-transparent transition-colors ${
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900 text-accent' 
                      : 'text-text-muted hover:text-text-main hover:bg-secondary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary pt-16 pb-8 border-t border-border-color mt-auto">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4 text-text-main">
              <Cpu className="w-6 h-6 text-accent" />
              <span>{COMPANY_INFO.name}</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map(item => (
                <NavLink key={item.path} to={item.path} className="text-text-muted hover:text-accent text-sm transition-colors">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-text-muted text-sm">
              <li className="flex gap-3">
                <span className="text-accent font-semibold">A:</span> 
                {COMPANY_INFO.address}
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">E:</span> 
                {COMPANY_INFO.email}
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">P:</span> 
                {COMPANY_INFO.phone}
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-8 border-t border-border-color text-center text-text-muted text-xs">
          © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </div>
      </footer>
      
      {/* Gemini AI Widget */}
      <ChatWidget />
    </div>
  );
};

export default Layout;