const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,

    image: {
        type:String,
        default:"https://example.com/default-image.jpg",
            
        set: (v) => {
          return v === "" ? "https://example.com/default-image.jpg"  : v;
        }, 
       // filename: { type: String, required: true },
       //url: { type: String, required: true },
    },

  
    price: { type: Number, required: true, default: /NA/ }, 
    location : String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

