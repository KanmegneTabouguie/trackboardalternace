// routes/applicationRoutes.js
const express = require('express');
const router = express.Router();
const { getApplications, addApplication, getApplication, updateApplication, deleteApplication } = require('../controllers/applicationController');

// CRUD routes
router.get('/', getApplications);
router.post('/', addApplication);
router.get('/:id', getApplication);
router.put('/:id', updateApplication);
router.delete('/:id', deleteApplication);

module.exports = router;
