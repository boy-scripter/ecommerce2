import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },

    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },

    image: [
        {
            type: String,
            trim: true,
            required: true
        }
    ],

    mrp: {
        type: Number,
        required: true,
        min: 1
    },

    sales_price: {
        type: Number,
    }

})


export default mongoose.model("category", productSchema)