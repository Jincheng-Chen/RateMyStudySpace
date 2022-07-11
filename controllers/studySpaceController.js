const StudySpace = require('../models/studySpace');

const getStudySpace = (req, res) => {
  StudySpace.findById(req.params.studySpaceId).then((response) => {
    res.status(200).json(response);
  }).catch((err) => {
    res.status(400).json(err);
  });
};

// TODO get study spaces using a query
const getStudySpaceFiltered = (req, res) => {
  console.log(req + res);
  res.status(400).json('getStudySpaceFiltered');
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

const addNewImage = (req, res) => {
  const id = req.params.studySpaceId;
  const { image } = req.body;
  StudySpace.findByIdAndUpdate(id, { $addToSet: { images: image } }).then(() => {
    res.status(204).json('');
  }).catch((err) => {
    res.status(400).json(err);
  });
};

module.exports = {
  getStudySpace,
  getStudySpaceFiltered,
  addNewStudySpace,
  addNewImage,
};
