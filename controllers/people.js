const { people } = require('../public/data.js');

const getPeople = (req, res) => {
  if (!people) {
    return res.status(404).json({ success: false, msg: 'No people found' });
  }
  res.status(200).json({ success: true, data: people });
};

module.exports = { getPeople };
