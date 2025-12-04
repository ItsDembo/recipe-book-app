// This service would normally call OpenAI/Gemini.
// For now, we return high-quality mock data to demonstrate the UI.

const generateLifestylePlan = async (userProfile) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
        summary: "Based on your goal to gently build strength and eat more balanced meals, focus on consistency rather than perfection. Aim for protein at every meal and listen to your hunger cues.",
        actionPoints: [
            "Add a source of protein (beans, tofu, eggs, lean meat) to your breakfast.",
            "Hydrate: Try to drink a glass of water before your morning coffee.",
            "Movement: A 15-minute walk after lunch can help digestion and energy.",
            "Prep: Wash and chop 2 types of veggies on Sunday for quick access."
        ],
        weeklyCheckIn: [
            "Did you feel energized after your meals?",
            "How was your sleep quality this week?",
            "Did you manage to add a veggie to lunch 3 times?"
        ]
    };
};

const generateRecipe = async (preferences) => {
    await new Promise(resolve => setTimeout(resolve, 2500));

    return {
        title: "Mediterranean Quinoa Bowl",
        description: "A quick, vibrant bowl packed with fiber and plant-based protein. Perfect for a busy lunch.",
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: 2,
        ingredients: [
            { name: "Quinoa", qty: "1", unit: "cup" },
            { name: "Cherry Tomatoes", qty: "1", unit: "cup" },
            { name: "Cucumber", qty: "1", unit: "medium" },
            { name: "Chickpeas", qty: "1", unit: "can" },
            { name: "Feta Cheese", qty: "1/2", unit: "cup" },
            { name: "Olive Oil", qty: "2", unit: "tbsp" },
            { name: "Lemon Juice", qty: "1", unit: "tbsp" }
        ],
        steps: [
            "Rinse quinoa and cook according to package instructions.",
            "While quinoa cooks, chop tomatoes and cucumber.",
            "Drain and rinse chickpeas.",
            "In a small bowl, whisk olive oil, lemon juice, salt, and pepper.",
            "Fluff quinoa with a fork and divide into bowls.",
            "Top with veggies, chickpeas, and feta. Drizzle with dressing."
        ],
        notes: "You can swap chickpeas for grilled chicken or tofu if preferred."
    };
};

const generateDailyPlan = async (preferences) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
        date: new Date().toISOString(),
        meals: {
            breakfast: {
                title: "Oatmeal with Berries & Nuts",
                type: "Breakfast",
                calories: "~350" // Optional
            },
            lunch: {
                title: "Mediterranean Quinoa Bowl",
                type: "Lunch",
                calories: "~450"
            },
            snack: {
                title: "Apple slices with Almond Butter",
                type: "Snack",
                calories: "~200"
            },
            dinner: {
                title: "Baked Salmon with Asparagus",
                type: "Dinner",
                calories: "~500"
            }
        },
        tips: "Great balance of Omega-3s today!"
    };
};

module.exports = {
    generateLifestylePlan,
    generateRecipe,
    generateDailyPlan
};
