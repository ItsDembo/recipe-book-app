import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Clock, Users, ArrowRight } from 'lucide-react';
import api from '../services/api';

const RecipeCreator = () => {
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [preferences, setPreferences] = useState({
        cuisine: 'Italian',
        time: '30 mins',
        ingredients: ''
    });

    const handleGenerate = async () => {
        setLoading(true);
        setRecipe(null);
        try {
            const data = await api.getRecipe(preferences);
            setRecipe(data);
        } catch (error) {
            console.error("Error generating recipe:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-start" >
            {/* Input Section */}
            < div className="space-y-6" >
                <header>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Recipe Creator</h1>
                    <p className="text-gray-600 mt-2">Tell us what you're craving (or what's in the fridge).</p>
                </header>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine / Style</label>
                        <input
                            type="text"
                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                            placeholder="e.g. Italian, Mexican, Comfort Food"
                            value={preferences.cuisine}
                            onChange={(e) => setPreferences({ ...preferences, cuisine: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Time Available</label>
                        <select
                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                            value={preferences.time}
                            onChange={(e) => setPreferences({ ...preferences, time: e.target.value })}
                        >
                            <option value="15 mins">Quick (15 mins)</option>
                            <option value="30 mins">Medium (30 mins)</option>
                            <option value="45 mins">Relaxed (45+ mins)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients to use (optional)</label>
                        <input
                            type="text"
                            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                            placeholder="e.g. chicken, broccoli, rice"
                            value={preferences.ingredients}
                            onChange={(e) => setPreferences({ ...preferences, ingredients: e.target.value })}
                        />
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="w-full py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {loading ? 'Cooking up ideas...' : (
                            <>
                                Generate Recipe <ChefHat className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            </div >

            {/* Result Section */}
            < div className="lg:pl-8" >
                {
                    recipe ? (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            <div className="bg-primary-600 p-8 text-white">
                                <h2 className="text-2xl font-display font-bold mb-2">{recipe.title}</h2>
                                <p className="text-primary-100">{recipe.description}</p>

                                <div className="flex gap-6 mt-6 text-sm font-medium">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" /> {recipe.prepTime} prep
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" /> {recipe.servings} servings
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Ingredients</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {recipe.ingredients.map((ing, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-700 bg-gray-50 p-2 rounded-lg">
                                                <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                                                <span className="font-semibold">{ing.qty} {ing.unit}</span> {ing.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Instructions</h3>
                                    <div className="space-y-6">
                                        {recipe.steps.map((step, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                                                    {i + 1}
                                                </div>
                                                <p className="text-gray-700 mt-1">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {recipe.notes && (
                                    <div className="bg-amber-50 p-4 rounded-xl text-amber-800 text-sm">
                                        <strong>Note:</strong> {recipe.notes}
                                    </div>
                                )}
                            </div>
                        </motion.div >
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400 p-12 border-2 border-dashed border-gray-200 rounded-3xl">
                            <div className="text-center">
                                <ChefHat className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                <p>Your recipe will appear here</p>
                            </div>
                        </div>
                    )}
            </div >
        </div >
    );
};

export default RecipeCreator;
