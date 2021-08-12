const uploadFile = require('../../config/upload-file');
const Location = require('../../models/location');

module.exports = {
    createLocation,
    index,
    detail,
    deleteOne,
    updateOne
};

async function createLocation(req, res) {
     try {
        if (req.file) {
            // TODO: Remove the console.log after you've verified the output
            console.log(req.file);
            // The uploadFile function will return the uploaded file's S3 endpoint
            const url = await uploadFile(req.file);
            req.body.photos = [{url, content: req.body.content}];
        }
        req.body.user = req.user._id;
        const locationDoc = await Location.create(req.body);
        res.json(locationDoc);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

async function index(req, res) {
    const locations = await Location.find({}).sort('-createdAt').exec();
    res.json(locations);
}
async function detail(req, res) {
    const location = await Location.findById(req.params.id);
    res.json(location);
}
async function deleteOne(req, res) {
    const location = await Location.findOneAndDelete( {_id: req.params.id} );
    res.json("Location Deleted");
}
async function updateOne(req, res) {
    const location = await Location.findOneAndUpdate( {_id: req.params.id}, req.body, {new:true} );
    res.json(location);
}