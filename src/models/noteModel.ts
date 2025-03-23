import mongoose, { Schema, Document } from 'mongoose';
import { Note } from '../types/note';

const noteSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Associate note with user
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const NoteModel = mongoose.model<Note & Document>('Note', noteSchema);

export default NoteModel;