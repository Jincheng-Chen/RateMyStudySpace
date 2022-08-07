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
    filter, operator, value, lat, lon, radius,
  } = req.params;

  const query = { };
  if (filter !== 'none' && operator !== 'none' && value !== '') {
    const filterKey = `${filter}`;
    const operatorKey = `$${operator}`;
    const filterOperation = { };
    filterOperation[operatorKey] = Number(value);
    query[filterKey] = filterOperation;
  }
  StudySpace.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [parseFloat(lon),
            parseFloat(lat)],
        },
        maxDistance: Number(radius) * 1000,
        distanceField: 'distance',
        includeLocs: 'coordinates',
        spherical: true,
      },
    },
    {
      $match: query,
    },
  ]).then((found) => {
    res.status(200).json(found);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

const getStudySpaceByLocation = async (req, res) => {
  const { location } = req.params;

  try {
    const AllstudySpace = await StudySpace.find({ location }).sort({ createdAt: -1 });
    res.status(200).json(AllstudySpace);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

const getStudySpacesByRadialLocation = async (req, res) => {
  const { lat, lon, radius } = req.params;

  try {
    const studySpaces = await StudySpace.find({
      coordinates: {
        $near: {
          $maxDistance: parseInt(radius * 1000, 10),
          $geometry: {
            type: 'Point',
            /*eslint-disable */
          coordinates: [parseFloat(lon, 10), parseFloat(lat, 10)]
          /* eslint-enable */
          },
        },
      },
    });
    res.status(200).json(studySpaces);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

const addNewStudySpace = async (req, res) => {
  try {
    await StudySpace.create({ ...req.body });
    const AllstudySpace = await StudySpace.find({}).sort({ createdAt: -1 });
    console.log(AllstudySpace[0]);
    res.status(200).json(AllstudySpace[0]);
  } catch (error) {
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
  getStudySpacesByRadialLocation,
};
