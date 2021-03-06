const Location = require('../../models/location');

module.exports = {
    create,
    delete: deleteComment,
    // edit,
    // update
};

async function create(req, res) {
    let location = await Location.findById(req.params.id);
    req.body.user = req.user._id;
    location.comments.push(req.body);
    await location.save();
    res.json(location);
}

async function deleteComment(req, res) {
    const location = await Location.findOne( {"comments._id":req.params.id} );
    location.comments.remove(req.params.id);
    await location.save();
    res.json(location);
}