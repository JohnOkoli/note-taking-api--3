import express from 'express';
import {
    getAllNotes,
    getNoteById,
    createNote,
    deleteNote,
    updateNote,
    getNotesByCategory
} from '../controllers/noteController';
import validateNote  from '../middlewares/validateNote';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/notes', authMiddleware, getAllNotes);
router.get('/notes/categories/:categoryId', authMiddleware, getNotesByCategory);
router.get('/notes/:id', authMiddleware, getNoteById);
router.post('/notes', authMiddleware, validateNote, createNote);
router.put('/notes/:id', authMiddleware, validateNote, updateNote);
router.delete('/notes/:id', authMiddleware, deleteNote);

export default router; 