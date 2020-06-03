import express from 'express';
import * as ersReimbService from '../services/ers_reimbursement-service';
import { ErsReimb } from '../models/ers_reimbursement-model';

export const ersReimbRouter = express.Router();


ersReimbRouter.get('', async (request, response, next) => {
    let ersReimbs: ErsReimb[];

    try {
        ersReimbs = await ersReimbService.getAllReimbs();
        response.json(ersReimbs);

    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
});


ersReimbRouter.get('/:id', async (request, response, next) => {
    const id: number = parseInt(request.params.id);

    let ErsReimb: ErsReimb;

    try {
        ErsReimb = await ersReimbService.getReimbById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!ErsReimb) {
        response.sendStatus(404);
    } else {
        response.json(ErsReimb);
    }
    next();
});

ersReimbRouter.post('', async (request, response, next) => {
    const ErsReimb = request.body;
    let newErsReimb: ErsReimb;
    try {
        newErsReimb = await ersReimbService.saveReimb(ErsReimb);
        response.status(201);
        response.json(newErsReimb);
    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
});


ersReimbRouter.patch('', async (request, response, next) => {
    const ErsReimb = request.body;
    let updatedErsReimb: ErsReimb;

    try {
        updatedErsReimb = await ersReimbService.patchReimb(ErsReimb);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedErsReimb) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedErsReimb);
    }
    next();
});


ersReimbRouter.delete('/:id', async (request, response, next) => {
    const id = parseInt(request.params.id);
    let deletedErsReimb: ErsReimb;

    try {
        deletedErsReimb = await ersReimbService.deleteReimb(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!deletedErsReimb) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(deletedErsReimb);
    }
    next();
});
