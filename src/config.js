import { config } from "dotenv"; 
config();

export const PORT = process.env.PORT || 4000; 
export const ATLAS_URI = process.env.ATLAS_URI || "mongodb://localhost/notesdb"; 