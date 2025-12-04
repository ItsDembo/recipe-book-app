import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sun, Moon, Coffee } from 'lucide-react';
import axios from 'axios';

const DailyPlanner = () => {
    const [loading, setLoading] = useState(false);
    const [plan, setPlan] = useState(null);

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/ai/daily-plan', {});
            setPlan(response.data);
        } catch (error) {
            console.error("Error generating plan:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Daily Planner</h1>
                    <p className="text-gray-600 mt-2">One day at a time.</p>
                </div>
                <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:opacity-70"
                >
                    {loading ? 'Planning...' : 'Generate New Day'}
                </button>
            </header>

            {plan ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <MealCard
                        icon={<Coffee className="w-6 h-6 text-amber-500" />}
                        title="Breakfast"
                        meal={plan.meals.breakfast}
                        time="8:00 AM"
                    />
                    <MealCard
                        icon={<Sun className="w-6 h-6 text-orange-500" />}
                        title="Lunch"
                        meal={plan.meals.lunch}
                        time="1:00 PM"
                    />
                    <MealCard
                        icon={<Coffee className="w-6 h-6 text-rose-400" />}
                        title="Afternoon Snack"
                        meal={plan.meals.snack}
                        time="4:00 PM"
                    />
                    <MealCard
                        icon={<Moon className="w-6 h-6 text-indigo-500" />}
                        title="Dinner"
                        meal={plan.meals.dinner}
                        time="7:00 PM"
                    />
                </motion.div>
            ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">No plan for today yet</h3>
                    <p className="text-gray-500 mt-2">Click "Generate New Day" to get started.</p>
                </div>
            )}
        </div>
    );
};

const MealCard = ({ icon, title, meal, time }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-gray-50 flex flex-col items-center justify-center text-gray-400 font-medium text-xs gap-1">
            {icon}
            <span>{time}</span>
        </div>
        <div className="flex-1">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{title}</div>
            <h3 className="text-xl font-bold text-gray-900">{meal.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{meal.calories} • {meal.type}</p>
        </div>
    </div>
);

export default DailyPlanner;
