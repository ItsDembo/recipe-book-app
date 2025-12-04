const aiService = require('../services/aiService');

exports.getLifestylePlan = async (req, res) => {
    try {
        const plan = await aiService.generateLifestylePlan(req.body);
        res.json(plan);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate lifestyle plan' });
    }
};

exports.getRecipe = async (req, res) => {
    try {
        const recipe = await aiService.generateRecipe(req.body);
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate recipe' });
    }
};

exports.getDailyPlan = async (req, res) => {
    try {
        const plan = await aiService.generateDailyPlan(req.body);
        res.json(plan);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate daily plan' });
    }
};
