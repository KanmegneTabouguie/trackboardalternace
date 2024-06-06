// controllers/applicationController.js
const Application = require('../models/Application');

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.findAll();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getApplication = async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id);
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const application = await Application.update(req.body, { where: { id: req.params.id } });
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    await Application.destroy({ where: { id: req.params.id } });
    res.json({ success: 'Application deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
