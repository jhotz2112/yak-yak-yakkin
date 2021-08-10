const Location = require('../../models/location');

module.exports = {
    createLocation,
    index,
    detail
};

async function createLocation(req, res) {
    req.body.user = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const location = await Location.create(req.body);
    res.json(location);
}

async function index(req, res) {
    const locations = await Location.find({})
    res.json(locations)
}
async function detail(req, res) {
    const location = await Location.findById(req.params.id)
    res.json(location)
}