const Location = require('../../models/location');

module.exports = {
    createLocation,
    history,
};

async function createLocation(req, res) {
    req.body.user = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const location = await Location.create(req.body);
    res.json(location);
}

async function history(req, res) {
    const location = await Location
        .find({ user: req.user._id})
        res.json(location)
}