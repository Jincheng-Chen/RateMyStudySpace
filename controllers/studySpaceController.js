const StudySpace = require('../models/studySpace');

const getStudySpace = (req, res) => {
  StudySpace.findById(req.params.studySpaceId).then((response) => {
    res.status(200).json(response);
  }).catch((err) => {
    res.status(400).json(err);
  });
};

const getStudySpaceFiltered = (req, res) => {
  const {
    location, filter, operator, value,
  } = req.params;

  const query = { };
  if (filter !== 'none' && operator !== 'none' && value !== '') {
    const filterKey = `${filter}`;
    const operatorKey = `$${operator}`;
    const filterOperation = { };
    filterOperation[operatorKey] = Number(value);
    query[filterKey] = filterOperation;
  }
  StudySpace.aggregate([{
    $match: { location },
  },
  {
    $match: query,
  }]).then((found) => {
    res.status(200).json(found);
  }).catch((err) => {
    res.status(400).json(err);
  });
};

const getStudySpaceByLocation = (req, res) => {
  const { location } = req.params;

  StudySpace.find({ location })
    .then((response) => {
      res.status(200).json(response);
    }).catch((err) => {
      res.status(400).json(err);
    });
};

const addNewStudySpace = async (req, res) => {
  // const studySpace = req.body;
  // const newStudySpace = new StudySpace(studySpace);

  // newStudySpace.save().then((result) => {
  //   res.status(200).json({id: result._id}); // eslint-disable-line
  // }).catch((err) => {
  //   res.status(400).json(err);
  // });
  try {
    await StudySpace.create({ ...req.body });
    const AllstudySpace = await StudySpace.find({}).sort({ createdAt: -1 });
    console.log(AllstudySpace);
    res.status(200).json(AllstudySpace);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
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
  getStudySpaceByLocation,
};
