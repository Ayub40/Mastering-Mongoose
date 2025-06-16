import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";


export const notesRoutes = express.Router();

notesRoutes.post('/create-note', async (req: Request, res: Response) => {

    const body = req.body

    // Approach -   1 of creating a data
    // const myNote = new Note({
    //     title: "Learning Express",
    //     tags: {
    //         label: "database"
    //     }
    //     // content: "I am learning Mongoose",
    //     // publishDate: 10081994
    // })

    // await myNote.save()

    // Approach -   2 of creating a data
    const note = await Note.create(body)

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
        // note: myNote
    })
})

notesRoutes.get('/', async (req: Request, res: Response) => {
    const notes = await Note.find()

    res.status(201).json({
        success: true,
        message: "Note Gets Successfully",
        notes
        // note: myNote
    })
});

notesRoutes.get('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const note = await Note.findById(noteId)
    // Another way to find
    // const note = await Note.findOne({ _id: noteId })

    res.status(201).json({
        success: true,
        message: "Note Gets Successfully",
        note
        // note: myNote
    })
});

notesRoutes.patch('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });
    // Another way to update
    // const note = await Note.updateOne({ _id: noteId }, updatedBody, { new: true });
    // Another way to find
    // const note = await Note.findOneAndUpdate({ _id: noteId }, updatedBody, { new: true });


    res.status(201).json({
        success: true,
        message: "Note Updated Successfully",
        note
        // note: myNote
    })
});

notesRoutes.delete('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId);
    // Another way to Delete
    // const note = await Note.findOneAndDelete({ _id: noteId });
    // const note = await Note.deleteOne({ _id: noteId });


    res.status(201).json({
        success: true,
        message: "Note Deleted Successfully",
        note
        // note: myNote
    })
});