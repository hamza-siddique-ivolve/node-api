const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String            
    },
    company: {
        type: String            
    },
    phone: {
        type: String            
    },
    

})

module.exports = mongoose.model('Student',UserSchema);

