import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="text-center space-y-8 py-12 md:py-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight"
                >
                    Healthy eating, powered by AI <br />
                    <span className="text-primary-500">without the diet culture.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-600 max-w-2xl mx-auto"
                >
                    Smart food, real habits, no nonsense. Get personalized recipes and lifestyle guidance that fits your life, not the other way around.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/dashboard" className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200 flex items-center gap-2">
                        Get Started <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link to="/recipes" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                        Try Recipe Creator
                    </Link>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<Heart className="w-8 h-8 text-rose-500" />}
                    title="Gentle Lifestyle Coach"
                    description="No crash diets. Just simple, science-aligned suggestions to help you build sustainable habits."
                />
                <FeatureCard
                    icon={<Sparkles className="w-8 h-8 text-amber-500" />}
                    title="AI Recipe Creator"
                    description="Generate delicious recipes based on what you have, what you like, and how much time you have."
                />
                <FeatureCard
                    icon={<Clock className="w-8 h-8 text-blue-500" />}
                    title="Smart Daily Planner"
                    description="Plan your meals for the day in seconds, tailored to your goals and schedule."
                />
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
    >
        <div className="mb-4 p-3 bg-gray-50 rounded-xl w-fit">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

export default LandingPage;
