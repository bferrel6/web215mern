import express from 'express';
import { Record } from '../models/recordModel.js';

const router = express.Router()

// Route to insert a new record
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.artist ||
            !request.body.releaseYear
        ) {
            return response.status(400).send({
                message: 'Please fill in all required record info',
            });
        }
        const newRecord = {
            title: request.body.title,
            artist: request.body.artist,
            releaseYear: request.body.releaseYear,
        }

        const record = await Record.create(newRecord);

        return response.status(201).send(record);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Route to select all records from database
router.get('/', async (request, response) => {
    try {
        const records = await Record.find({});
        return response.status(200).json({
            count: records.length,
            data: records,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to select one record from database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const record = await Record.findById(id);
        return response.status(200).json(record);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// route to update a record
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.artist ||
            !request.body.releaseYear
        ) {
            return response.status(400).send({
                message: 'Please fill in all required fields',
            });
        }

        const { id } = request.params;

        const result = await Record.findByIdAndUpdate(id, request.body);        

        if (!result) { 
            return response.status(404).json({ message: 'Record not found' });
        } 

        return response.status(200).send({ message: 'Record updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

// Route to delete a record
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Record.findByIdAndDelete(id);
        if (!result) {
            return response.status(400).json({ message: 'Record not found' });
        }
        return response.status(200).json({ message: 'Record deleted successfully '});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;