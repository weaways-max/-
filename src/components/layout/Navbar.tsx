import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, TreePine } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المتجر', path: '/store' },
    { name: 'حاسبة الخشب', path: '/calculator' },
    { name: 'من نحن', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-dark-border bg-dark-surface/90 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-3xl font-bold tracking-tight bg-gradient-to-l from-gold to-brown bg-clip-text text-transparent flex items-center gap-2">
              <TreePine className="h-8 w-8 text-gold" />
              ازني خشب
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse opacity-80">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-gold ${
                  isActive(link.path) ? 'text-gold border-b border-gold pb-1' : 'text-text-main'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="relative flex items-center bg-dark-surface-alt px-3 py-2 rounded-sm border border-dark-border">
              <Search className="h-4 w-4 text-text-muted" />
              <Input
                type="search"
                placeholder="ابحث عن نوع الخشب..."
                className="w-48 border-none bg-transparent h-6 focus-visible:ring-0 text-xs px-2"
              />
            </div>
            <div className="flex gap-4 items-center">
              <Button variant="outline" size="icon" className="rounded-full relative w-10 h-10 border-gold">
                <ShoppingCart className="h-4 w-4 text-gold" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-sm bg-gold text-[10px] font-bold text-dark-bg">
                  3
                </span>
              </Button>
              <Link to="/admin">
                <Button variant="ghost" className="text-xs uppercase tracking-widest text-text-muted hover:text-gold">الإدارة</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full relative border-none bg-transparent">
              <ShoppingCart className="h-5 w-5 text-gold" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-text-main" /> : <Menu className="h-6 w-6 text-text-main" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-dark-border bg-dark-bg px-4 py-4 space-y-4">
          <div className="relative mb-4">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <Input
              type="search"
              placeholder="ابحث عن نوع الخشب..."
              className="w-full pl-4 pr-10 rounded-sm"
            />
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest p-2 rounded-sm ${
                  isActive(link.path) ? 'bg-dark-surface-alt text-gold' : 'text-text-main hover:bg-dark-surface'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="text-sm uppercase tracking-widest p-2 rounded-sm text-text-main hover:bg-dark-surface"
              onClick={() => setIsOpen(false)}
            >
              لوحة الإدارة
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
