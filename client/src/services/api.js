import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Mock data to use when backend is not available (e.g. GitHub Pages demo)
const MOCK_DATA = {
    lifestyle: {
        summary: "DEMO MODE: Based on your goal to gently build strength, focus on consistency. (Backend not connected)",
        actionPoints: [
            "Add a source of protein to your breakfast.",
            "Hydrate: Drink water before coffee.",
            "Movement: 15-minute walk after lunch.",
            "Prep: Wash veggies on Sunday."
        ]
    },
    recipe: {
        title: "Mediterranean Quinoa Bowl (Demo)",
        description: "A quick, vibrant bowl packed with fiber. (Backend not connected)",
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: 2,
        nutrition: {
            calories: 450,
            protein: 18,
            carbs: 52,
            fats: 16
        },
        ingredients: [
            { name: "Quinoa", qty: "1", unit: "cup" },
            { name: "Cherry Tomatoes", qty: "1", unit: "cup" },
            { name: "Feta Cheese", qty: "1/2", unit: "cup" }
        ],
        steps: [
            "Cook quinoa.",
            "Chop veggies.",
            "Mix and serve."
        ],
        notes: "This is a demo response because the backend is not reachable."
    },
    dailyPlan: {
        meals: {
            breakfast: { title: "Oatmeal (Demo)", type: "Breakfast", calories: 350, protein: 12, carbs: 54, fats: 10 },
            lunch: { title: "Quinoa Bowl (Demo)", type: "Lunch", calories: 450, protein: 18, carbs: 52, fats: 16 },
            snack: { title: "Apple", type: "Snack", calories: 95, protein: 1, carbs: 25, fats: 0 },
            dinner: { title: "Salmon", type: "Dinner", calories: 500, protein: 42, carbs: 18, fats: 28 }
        }
    }
};

const api = {
    getLifestylePlan: async (data) => {
        try {
            const response = await axios.post(`${API_URL}/ai/lifestyle`, data);
            return response.data;
        } catch (error) {
            console.warn("Backend unavailable, using mock data");
            return new Promise(resolve => setTimeout(() => resolve(MOCK_DATA.lifestyle), 1000));
        }
    },
    getRecipe: async (data) => {
        try {
            const response = await axios.post(`${API_URL}/ai/recipe`, data);
            return response.data;
        } catch (error) {
            console.warn("Backend unavailable, using mock data");
            return new Promise(resolve => setTimeout(() => resolve(MOCK_DATA.recipe), 1000));
        }
    },
    getDailyPlan: async (data) => {
        try {
            const response = await axios.post(`${API_URL}/ai/daily-plan`, data);
            return response.data;
        } catch (error) {
            console.warn("Backend unavailable, using mock data");
            return new Promise(resolve => setTimeout(() => resolve(MOCK_DATA.dailyPlan), 1000));
        }
    }
};

export default api;
