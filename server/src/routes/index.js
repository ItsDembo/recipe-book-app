const router = require('express').Router();
const aiController = require('../controllers/aiController');

router.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'NourishAI API is running' });
});

// AI Routes
router.post('/ai/lifestyle', aiController.getLifestylePlan);
router.post('/ai/recipe', aiController.getRecipe);
router.post('/ai/daily-plan', aiController.getDailyPlan);

module.exports = router;
