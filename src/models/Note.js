import mongoose from "mongoose";

// const NoteSchema = new mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true, 
//         },
//         description: {
//             type: String,
//             required: true, 
//         },
//         user: {
//             type: String,
//             required: true,
//         },
//     },
//     {
//         timestamps: true, 
//     }
// );

// export default mongoose.model("Note", NoteSchema);



// const NoteSchema = new Schema({
//     title: { type: String, required: true},
//     stock: {type: Number, required: true},
//     description: { type: String, required: false},
//     date: { type: Date, default: Date.now},
//     user: {type: String }
// })


const NoteSchema = new mongoose.Schema(
    {
        category: 
        {
            type: String, 
            required: false
        },
        brand: { 
            type: String, 
            required: false
        },
        object: {
            type: String, 
            required: true
        }, 
        stock: {
            type: Number, 
            required: true
        },
        minStock : {
            type: Number, 
            required: false
        },
        dateOff: { 
            type: Date, 
            required: false
        },  
        description: { 
            type: String, 
            required: false
        },
        date: { 
            type: Date, 
            default: Date.now
        },
        user: {
            type: String, 
            required: true, 
        }
    },
    {
        timestamps: true, 
    }  
);

export default mongoose.model("Note", NoteSchema);