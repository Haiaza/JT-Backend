const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: false,
    },
    hashedPassword: {
        type: String,
        required: true
    }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});

module.exports = mongoose.model('User', userSchema);

const User = mongoose.model('User', userSchema)

module.exports = User