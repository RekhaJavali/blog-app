const mongoose =  require("mongoose");

// const { Schema } = mongoose;
// const Category = new Schema();


const CategorySchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
    },
    {timestamps:true}
)

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;

//module.exports = mongoose.model("Category", CategorySchema);