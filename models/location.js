const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});

const photoSchema = new Schema({
    content: String,
    url: { type: String, required: true }
}, {
    timestamps: true
});

const locationSchema = new Schema({
    locationName: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Expert'],
    },
    description: {
        type: String,
        required: true
    },
    photos: [photoSchema],
    comments: [commentSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});


module.exports = mongoose.model('Location', locationSchema);