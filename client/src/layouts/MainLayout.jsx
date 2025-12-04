import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ChefHat, User, Calendar, Home } from 'lucide-react';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-gray-800 font-sans">
            <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
                        <ChefHat className="w-8 h-8" />
                        <span className="text-xl font-display font-bold tracking-tight">NourishAI Kitchen</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/lifestyle" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Lifestyle Coach</Link>
                        <Link to="/recipes" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Recipe Creator</Link>
                        <Link to="/planner" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Daily Planner</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link to="/dashboard" className="hidden md:block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Dashboard</Link>
                        <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                            <User className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8">
                <Outlet />
            </main>

            <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} NourishAI Kitchen. Smart food, real habits.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
