const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: { type: String, required: true },
    userDifficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Expert'],
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
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
    // comments: [commentSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});


module.exports = mongoose.model('Location', locationSchema);