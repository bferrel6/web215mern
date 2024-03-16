import mongoose from "mongoose";

const recordSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        artist: {
            type: String,
            required: true,
        },
        releaseYear: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Record = mongoose.model('Record', recordSchema);