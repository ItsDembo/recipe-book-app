import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import api from '../services/api';

const LifestyleCoach = () => {
    const [step, setStep] = useState('form'); // form, loading, result
    const [formData, setFormData] = useState({
        age: '',
        height: '', // in cm
        weight: '', // in kg
        goalWeight: '',
        activityLevel: 'moderate',
        workoutsPerWeek: '2',
        goal: 'lose',
        dietaryPreference: 'mediterranean',
        restrictions: '',
        targetCalories: ''
    });
    const [plan, setPlan] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStep('loading');
        try {
            const data = await api.getLifestylePlan(formData);
            setPlan(data);
            setStep('result');
        } catch (error) {
            console.error("Error fetching plan:", error);
            setStep('form');
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="text-center">
                <h1 className="text-3xl font-display font-bold text-gray-900">Lifestyle Coach</h1>
                <p className="text-gray-600 mt-2">Let's create your personalized plan for sustainable, healthy living.</p>
            </header>

            {step === 'form' && (
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                            <input
                                type="number"
                                required
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                                placeholder="e.g. 20"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                            <input
                                type="number"
                                required
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                                placeholder="e.g. 175"
                                value={formData.height}
                                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Weight (kg)</label>
                            <input
                                type="number"
                                required
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                                placeholder="e.g. 138"
                                value={formData.weight}
                                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Goal Weight (kg)</label>
                            <input
                                type="number"
                                required
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                                placeholder="e.g. 110"
                                value={formData.goalWeight}
                                onChange={(e) => setFormData({ ...formData, goalWeight: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">What is your main goal?</label>
                        <select
                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                            value={formData.goal}
                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        >
                            <option value="lose">Slow, sustainable weight loss</option>
                            <option value="gain">Build muscle / gain weight</option>
                            <option value="maintain">Maintain current weight</option>
                            <option value="balance">Eat more balanced meals</option>
                        </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Workouts per week</label>
                            <select
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                                value={formData.workoutsPerWeek}
                                onChange={(e) => setFormData({ ...formData, workoutsPerWeek: e.target.value })}
                            >
                                <option value="0">None / Sedentary</option>
                                <option value="1-2">1-2 times</option>
                                <option value="3-4">3-4 times</option>
                                <option value="5+">5+ times</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
                            <select
                                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                                value={formData.activityLevel}
                                onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
                            >
                                <option value="sedentary">Sedentary (desk job)</option>
                                <option value="light">Lightly active</option>
                                <option value="moderate">Moderately active</option>
                                <option value="very">Very active</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Preference</label>
                        <select
                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                            value={formData.dietaryPreference}
                            onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
                        >
                            <option value="mediterranean">Mediterranean</option>
                            <option value="balanced">Balanced / No preference</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="keto">Keto / Low carb</option>
                            <option value="paleo">Paleo</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Food Restrictions (optional)</label>
                        <input
                            type="text"
                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                            placeholder="e.g. no seafood, dairy-free, gluten-free"
                            value={formData.restrictions}
                            onChange={(e) => setFormData({ ...formData, restrictions: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Target Daily Calories (optional)</label>
                        <input
                            type="number"
                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                            placeholder="e.g. 2400 (leave blank for AI recommendation)"
                            value={formData.targetCalories}
                            onChange={(e) => setFormData({ ...formData, targetCalories: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Sparkles className="w-5 h-5" /> Generate My Plan
                    </button>
                </motion.form>
            )}

            {step === 'loading' && (
                <div className="text-center py-20">
                    <div className="animate-spin w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">Thinking about your goals...</p>
                </div>
            )}

            {step === 'result' && plan && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Your Personal Summary</h2>
                        <p className="text-gray-700 leading-relaxed">{plan.summary}</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Action Points</h2>
                        <ul className="space-y-4">
                            {plan.actionPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={() => setStep('form')}
                        className="text-gray-500 hover:text-gray-700 text-sm font-medium mx-auto block"
                    >
                        Start Over
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default LifestyleCoach;
