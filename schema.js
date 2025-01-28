const mongoose = require('mongoose')

const Blog_Post = new mongoose.Schema({
    Title: {
        type : String,
        unique : true,
        minimum_length : 5,
    },

    Content:{
        type : String,
        required: true,
        minimum_length : 50
    },
    Author:{
        type:String,
        default: 'user'
    },
    Tags:{
        type: [string],
        storage: ['tech']
    },
    category:{
        type: string,
        default : 'General'
    },
    likes:{
        type: [string]
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

const Comments = new mongoose.Schema({
    Username:{
        type: string,

    },
    Message : {
        type : string,
        required: true
    },
    Commented_at:{
        type:Date,
        default : Date.now
    }
})