import mongoose from "mongoose";

const metadataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        symbol: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        image: {
            type: String,
            required: true
        }
    }
);

const metaData = mongoose.model('metaData', metadataSchema);
export default metaData;