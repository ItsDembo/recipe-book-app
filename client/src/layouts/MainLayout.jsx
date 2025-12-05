import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { User, Calendar, Home } from 'lucide-react';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-cream-100 text-gray-800 font-sans">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img src="/logo.jpg" alt="NourishAI Kitchen" className="h-10 w-auto" />
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

            <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <img src="/logo.jpg" alt="NourishAI Kitchen" className="h-8 w-auto" />
                            </div>
                            <p className="text-sm text-gray-600">Smart food, real habits. AI-powered healthy eating made simple.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Features</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/lifestyle" className="text-gray-600 hover:text-primary-600 transition-colors">Lifestyle Coach</Link></li>
                                <li><Link to="/recipes" className="text-gray-600 hover:text-primary-600 transition-colors">Recipe Creator</Link></li>
                                <li><Link to="/planner" className="text-gray-600 hover:text-primary-600 transition-colors">Daily Planner</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/dashboard" className="text-gray-600 hover:text-primary-600 transition-colors">Dashboard</Link></li>
                                <li><Link to="/profile" className="text-gray-600 hover:text-primary-600 transition-colors">Profile</Link></li>
                                <li><Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">Home</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">About</h4>
                            <p className="text-sm text-gray-600">Built with React, Tailwind CSS, and AI to help you build sustainable healthy eating habits.</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} NourishAI Kitchen. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
