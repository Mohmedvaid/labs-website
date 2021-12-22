const router = require('express').Router();
const path = require('path');
const auth = require('../middleware/auth');
const User = require('../models/User');

// router.get("/", (req, res) => {
//     console.log(__dirname);
//     res.sendFile(path.join(__dirname, "../public/html/index.html"))
// });

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/home.html'));
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/login.html'));
});

router.get('/dashboard', auth, async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/dashboard.html'));
});
module.exports = router;
