import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    fullUrl: {
        type: String,
        required: true,
    }
}, 
{timestamps: true},
);

const UrlSchema = mongoose.model('url', urlSchema)

export { UrlSchema }