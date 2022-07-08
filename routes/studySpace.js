const express = require('express');

const router = express.Router();

const studySpaceController = require('../controllers/studySpaceController');

router.get('/:studySpaceId', studySpaceController.getStudySpace);
router.get('/filter', studySpaceController.getStudySpaceFiltered);
router.post('/addNewStudySpace', studySpaceController.addNewStudySpace);

module.exports = router;
