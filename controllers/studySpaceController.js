const StudySpace = require('../models/studySpace');
const Reviews = require('../models/review');

const getStudySpace = (req, res) => {
  StudySpace.findById(req.params.studySpaceId).then((response) => {
    res.status(200).json(response);
  }).catch((err) => {
    res.status(400).json(err);
  });
};

const getStudySpaceFiltered = (req, res) => {
  const { filter, operator, value } = req.params;
  const avgKey = `$${filter}`;
  const operatorKey = `$${operator}`;
  const query = { average: {} };
  query.average[operatorKey] = Number(value);
  if (filter === 'none' || operator === 'none' || value === '') {
    StudySpace.find().then((found) => {
      res.status(200).json(found);
    }).catch((err) => {
      res.status(400).json(err);
    });
  } else {
    Reviews.aggregate([
      {
        $group: {
          _id: '$spaceId',
          average: { $avg: avgKey },
        },
      },
      {
        $match: query,
      },
      {
        $project: {
          _id: {
            $toObjectId: '$_id',
          },
        },
      },
      {
        $lookup: {
          from: 'studyspaces',
          localField: '_id',
          foreignField: '_id',
          as: 'space',
        },
      },
      {
        $unwind: '$space',
      },
      {
        $replaceRoot: { newRoot: '$space' },
      },
    ]).then((found) => {
      res.status(200).json(found);
    }).catch((err) => {
      res.status(400).json(err);
    });
  }
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

const addNewStudySpace = (req, res) => {
  const studySpace = req.body;
  const newStudySpace = new StudySpace(studySpace);

  newStudySpace.save().then((result) => {
    res.status(200).json({id: result._id}); // eslint-disable-line 
  }).catch((err) => {
    res.status(400).json(err);
  });
};

const addNewImage = (req, res) => {
  const id = req.params.studySpaceId;
  console.log(id);
  const { image } = req.body;
  console.log(req.body);
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
