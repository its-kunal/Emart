const { string } = require("joi")
let mongoose = require("mongoose")
let sch = mongoose.Schema
let inventorySchema = new sch({
    // Product details
    // general details
    prodTitle: {
        type: String,
        min: 3
    },
    brand: {
        brandName: { type: String, min: 1, max: 235 },
        brandTagLine: { type: String, min: 15 }
        // more Store front details
    },
    prodDesc: {
        description:
            bulletPoints:
        Disclaimer:
            specs:
    },
    srvTags: [{
        name: String,
        tagLine: String,
        link: String,
        imgLink: String
    }],
    dimensions:
    packOf:
    

    // Additional details
    // Tax details
    // category details
    // Disclaimer Details
    // Logistics Details



    // Functions
    // Listing to Product
    // Product to Order

})