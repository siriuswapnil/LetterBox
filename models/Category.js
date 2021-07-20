const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
    name : {
        type : String, 
        required : false
    },
    },
    { timestamp : true}
);

module.exports = mongoose.model("Category", categorySchema);