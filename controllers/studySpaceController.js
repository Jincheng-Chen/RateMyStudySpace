const StudySpace = require('../models/studySpace');

const getStudySpace = (req, res) => {
  console.log(req + res);
  res.status(200).json('getStudySpace');
};

const getStudySpaceFiltered = (req, res) => {
  console.log(req + res);
};

const addNewStudySpace = (req, res) => {
  console.log(req.body);
  const studySpace = req.body;
  const newStudySpace = new StudySpace(studySpace);

  newStudySpace.save().then((response) => {
    console.log(response);
    res.status(204).json('');
  }).catch((err) => {
    res.status(400).json(err);
  });
};

module.exports = {
  getStudySpace,
  getStudySpaceFiltered,
  addNewStudySpace,
};
