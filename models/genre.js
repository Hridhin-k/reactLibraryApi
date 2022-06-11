const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 100,
        minlength: 3
    }

});
genreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre' + this._id;
    });

const genre = mongoose.model("genre", genreSchema);
module.exports = genre;
