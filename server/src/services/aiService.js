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
    const fatsGrams = Math.round((targetCalories * 0.25) / 9); // 25% of calories from fats
    const carbsGrams = Math.round((targetCalories - (proteinGrams * 4) - (fatsGrams * 9)) / 4);

    return {
        summary: `🎯 Your Personalized Plan\n\nBased on your profile (${userProfile.age} years old, ${userProfile.height}cm, ${userProfile.weight}kg → ${userProfile.goalWeight}kg goal), here's what will work for YOU:\n\n📊 Your Numbers:\n• BMR (calories you burn at rest): ${bmr} cal\n• Target Daily Calories: ${targetCalories} cal\n• Protein: ${proteinGrams}g (${Math.round((proteinGrams * 4 / targetCalories) * 100)}% of calories)\n• Carbs: ${carbsGrams}g (${Math.round((carbsGrams * 4 / targetCalories) * 100)}%)\n• Fats: ${fatsGrams}g (${Math.round((fatsGrams * 9 / targetCalories) * 100)}%)\n\n💡 Starting Out? Keep it Simple!\nDon't stress about hitting all these numbers perfectly. Focus on just TWO things to start:\n1️⃣ Calories: ${targetCalories}/day\n2️⃣ Protein: ${proteinGrams}g/day\n\nOnce you've got those down for 2-3 weeks, you can fine-tune carbs and fats. Small wins lead to big results! 🚀`,
        actionPoints: [
            `🎯 Daily Targets: ${targetCalories} cal | ${proteinGrams}g protein | ${carbsGrams}g carbs | ${fatsGrams}g fat`,
            `💪 Protein per meal: ~${Math.round(proteinGrams / 3)}g (makes hitting your daily goal easier!)`,
            `🏋️ Workouts: ${userProfile.workoutsPerWeek} times/week - perfect for ${userProfile.goal === 'lose' ? 'burning fat while keeping muscle' : 'building strength'}`,
            userProfile.restrictions ? `🚫 Avoiding: ${userProfile.restrictions}` : `🍽️ Food Style: ${userProfile.dietaryPreference} - eat what you love!`,
            "💧 Hydration Hack: Drink 500ml water when you wake up, before each meal",
            "⏰ Meal Timing: Eat within 1-2 hours of waking, space meals 3-4 hours apart for stable energy",
            "🔥 Prep Like a Pro: Sunday = protein batch cook day. Wednesday = veggie prep. Future you will thank you!",
            "📱 Track for 1 week: Use our Daily Planner to see patterns. Knowledge = power!"
        ],
        weeklyCheckIn: [
            "Did you hit your protein target 5+ days? (This is the #1 game-changer)",
            "How's your energy? Sleep quality? Mood?",
            "Did you feel satisfied after meals, or still hungry?",
            "What's ONE thing you'll improve next week?"
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
