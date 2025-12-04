import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import api from '../services/api';

const LifestyleCoach = () => {
    const [step, setStep] = useState('form'); // form, loading, result
    const [formData, setFormData] = useState({
        ageRange: '18-24',
        activityLevel: 'moderate',
        goal: 'maintain',
        restrictions: []
    });
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <header className="text-center">
                <h1 className="text-3xl font-display font-bold text-gray-900">Lifestyle Coach</h1>
                <p className="text-gray-600 mt-2">Gentle guidance for a healthier you.</p>
            </header>

            {step === 'form' && (
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">What is your main goal right now?</label>
                        <select
                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            value={formData.goal}
                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        >
                            <option value="maintain">Maintain my weight & energy</option>
                            <option value="lose">Gently lose weight</option>
                            <option value="gain">Gently gain weight / build strength</option>
                            <option value="balance">Eat more balanced meals</option>
                            <option value="cook">Cook more at home</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
                        <div className="grid grid-cols-3 gap-4">
                            {['low', 'moderate', 'high'].map((level) => (
                                <button
                                    key={level}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, activityLevel: level })}
                                    className={`p-3 rounded-xl border text-sm font-medium capitalize transition-colors ${formData.activityLevel === level
                                        ? 'bg-primary-50 border-primary-500 text-primary-700'
                                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
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
