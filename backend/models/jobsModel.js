const {schema, model} = require('mongoose');

const jobSchema = new schema({
    userId : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    questions : [{
        type: String,
        required: true
    }]
});

module.exports = model("Job", jobSchema);