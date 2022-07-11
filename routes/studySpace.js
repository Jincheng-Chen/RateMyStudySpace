const express = require('express');

const router = express.Router();

const studySpaceController = require('../controllers/studySpaceController');

// GET a study space that has the given id
router.get('/:studySpaceId', studySpaceController.getStudySpace);

// GET an array of study spaces that fit a certain filter
router.get('/filter', studySpaceController.getStudySpaceFiltered);

// POST new study space
router.post('/addNewStudySpace', studySpaceController.addNewStudySpace);

// PATCH a new image to the specific study space
router.patch('/addNewImage/:studySpaceId', studySpaceController.addNewImage);

module.exports = router;
