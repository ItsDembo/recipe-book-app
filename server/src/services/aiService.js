// This service would normally call OpenAI/Gemini.
// For now, we return high-quality mock data to demonstrate the UI.

const generateLifestylePlan = async (userProfile) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Calculate BMR (Mifflin-St Jeor Equation for demo)
    const bmr = userProfile.weight && userProfile.height && userProfile.age
        ? Math.round(10 * userProfile.weight + 6.25 * userProfile.height - 5 * userProfile.age + 5)
        : 2000;

    const targetCalories = userProfile.targetCalories || (userProfile.goal === 'lose' ? bmr - 500 : bmr);
    const proteinGrams = Math.round(userProfile.weight * 1.6); // 1.6g per kg for muscle preservation

    return {
        summary: `Based on your profile (${userProfile.age}yo, ${userProfile.height}cm, ${userProfile.weight}kg → ${userProfile.goalWeight}kg), your BMR is approximately ${bmr} calories. For ${userProfile.goal === 'lose' ? 'slow, sustainable weight loss' : 'your goal'}, aim for ${targetCalories} calories per day with ${proteinGrams}g protein (${Math.round((proteinGrams * 4 / targetCalories) * 100)}% of calories). Focus on ${userProfile.dietaryPreference} foods and consistency over perfection.`,
        actionPoints: [
            `Calorie Target: ${targetCalories} cal/day (BMR: ${bmr})`,
            `Protein Goal: ${proteinGrams}g/day (~${Math.round(proteinGrams / 3)}g per meal)`,
            `Workouts: ${userProfile.workoutsPerWeek} times/week - great for ${userProfile.goal === 'lose' ? 'fat loss while preserving muscle' : 'building strength'}`,
            userProfile.restrictions ? `Avoiding: ${userProfile.restrictions}` : `Dietary Style: ${userProfile.dietaryPreference} - rich in whole foods`,
            "Hydrate: Drink water before meals and throughout the day",
            "Meal Timing: Eat within 1-2 hours of waking, space meals 3-4 hours apart",
            "Prep Strategy: Batch cook proteins on Sunday, pre-chop veggies"
        ],
        weeklyCheckIn: [
            "Did you hit your protein target 5+ days?",
            "How was your energy and sleep quality?",
            "Did you feel satisfied after meals?"
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
        nutrition: {
            calories: 450,
            protein: 18,
            carbs: 52,
            fats: 16
        },
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
                calories: 350,
                protein: 12,
                carbs: 54,
                fats: 10
            },
            lunch: {
                title: "Mediterranean Quinoa Bowl",
                type: "Lunch",
                calories: 450,
                protein: 18,
                carbs: 52,
                fats: 16
            },
            snack: {
                title: "Apple slices with Almond Butter",
                type: "Snack",
                calories: 200,
                protein: 6,
                carbs: 24,
                fats: 9
            },
            dinner: {
                title: "Baked Salmon with Asparagus",
                type: "Dinner",
                calories: 500,
                protein: 42,
                carbs: 18,
                fats: 28
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
