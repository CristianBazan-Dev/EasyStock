import { Router } from "express"; 
import { 
    renderNoteForm,
    createNewNote, 
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote,
    stockUpdate, 
    searchBar
} from "../controllers/notes.controller.js"; 

import { isAuthenticated } from "../helpers/auth.js"; 

const router = Router(); 

// New note
router.get("/stock/add", isAuthenticated, createNewNote);

router.post("/stock/new-note", isAuthenticated, createNewNote); 

// Get All Notes
router.get("/stock", isAuthenticated, renderNotes); 

// Edit notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm); 

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// Edit Stock
router.put('/notes/save/:id',isAuthenticated, stockUpdate);  


// Delete note
router.delete("/notes/delete/:id", isAuthenticated, deleteNote); 

// Search Bar 
router.post("/search-notes", isAuthenticated, searchBar);

export default router; 