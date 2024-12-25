const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    feedback: [feedbackSchema]
    },
    { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;