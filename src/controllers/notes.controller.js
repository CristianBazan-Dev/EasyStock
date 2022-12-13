import Note from "../models/Note.js";

export const renderNoteForm = (req,res) => res.render("notes/new-note");

export const createNewNote = async (req, res) => {
    // const { title, description } = req.body; 
    // const errors = [];
    // if (!title) {
    //     errors.push({ text: "Por favor, escriba un título." });
    // }
    // if (!description) {
    //     errors.push({text: "Por favor, escriba una descripción."});
    // }
    // if (errors.length > 0)
    //     return res.render("notes/new-note", {
    //         errors,
    //         title,
    //         description,
    //     });
    

    // const newNote = new Note({ title, description }); 
    // newNote.user = req.user.id; 
    // await newNote.save(); 
    // req.flash("success_msg", "Nota creada"); 
    // res.redirect("/notes");
    const { category, brand, object, stock, minStock, dateOff, description } = req.body; 
    const errors = [];
     if(!object){
         errors.push({text: 'Por favor, escriba el nombre del producto'})
     }
     if(!stock){
         errors.push({text: 'Por favor, consigne la cantidad en stock'})
     }
 
     if(errors.length > 0){
         res.render('stock/new-note', {
             errors,
             object,
             stock
         }); 
     }else{
        const newNote = new Note({ category, brand, object, stock, minStock, dateOff, description});
        newNote.user = req.user.id;
        await newNote.save(); 
        req.flash('success_msg', 'Producto agregado exitosamente');
        res.redirect('/stock');  
     }
     
};

export const renderNotes = async (req, res) =>{
    const notes = await Note.find({ user: req.user.id })
        .sort({ date: "desc" })
        .lean();
    res.render("stock/all-notes", { notes });
};      



export const renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    if(note.user != req.user.id) {
        req.flash("error_msg", "No autorizado"); 
        return res.redirect("/stock");
    }
    res.render("stock/edit-note", { note }); 
};


export const stockUpdate = async (req,res)=>{
    const { stock } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { stock }).lean();
    // req.flash('success_msg','Nota actualizada satisfactoriamente');
    // res.redirect('/notes')  
};



export const updateNote = async ( req, res ) => {
    const { category, brand, object, stock, minStock, dateOff, description } = req.body; 
    await Note.findByIdAndUpdate(req.params.id, { category, brand, object, stock, minStock, dateOff, description }).lean();
    req.flash("sucess_msg", "Producto actualizado");
    res.redirect('/stock');
};

export const deleteNote = async (req, res) =>{
    await Note.findByIdAndDelete(req.params.id).lean(); 
    req.flash("sucess_msg", "Producto eliminado exitosamente"); 
    res.redirect("/stock");
};

export const searchBar = async (req,res) =>{
    let payload = req.body.payload.trim();
    let search = await Note.find({name: {$regex: new RegExp('^'+payload+'.*','i')}}).exec();
    // Limit search results to 10
    search = search.slice(0, 10); 
    res.send({payload: search}); 
}

