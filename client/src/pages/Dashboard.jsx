import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Calendar, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-display font-bold text-gray-900">Welcome back, Friend!</h1>
                <p className="text-gray-600 mt-2">Here's what's happening in your kitchen today.</p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
                <DashboardCard
                    to="/lifestyle"
                    icon={<Activity className="w-6 h-6 text-rose-500" />}
                    title="Lifestyle Coach"
                    description="Review your goals and habits."
                    action="View Plan"
                    color="bg-rose-50"
                />
                <DashboardCard
                    to="/recipes"
                    icon={<ChefHat className="w-6 h-6 text-amber-500" />}
                    title="Recipe Creator"
                    description="What are we cooking today?"
                    action="Create Recipe"
                    color="bg-amber-50"
                />
                <DashboardCard
                    to="/planner"
                    icon={<Calendar className="w-6 h-6 text-blue-500" />}
                    title="Daily Planner"
                    description="Plan your meals for success."
                    action="Open Planner"
                    color="bg-blue-50"
                />
            </div>

            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Tip of the Day</h2>
                <p className="text-gray-600 italic">"Small changes add up. Try swapping one sugary drink for water or herbal tea today."</p>
            </section>
        </div>
    );
};

const DashboardCard = ({ to, icon, title, description, action, color }) => (
    <Link to={to} className="block group">
        <motion.div
            whileHover={{ y: -3 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col"
        >
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm mb-6 flex-1">{description}</p>
            <div className="flex items-center text-primary-600 font-medium text-sm">
                {action} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
        </motion.div>
    </Link>
);

export default Dashboard;
