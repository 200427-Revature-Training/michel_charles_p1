import express from 'express';
import * as ErsUsersService from '../services/ers_users-service';
import { ErsUsers } from '../models/ers_users-model';

export const ErsUsersRouter = express.Router();

// Retrieves an Array of all ErsUserss
ErsUsersRouter.get('', async (request, response, next) => {
    let ErsUserss: ErsUsers[];

    try {
        ErsUserss = await ErsUsersService.getAllUsers();
        response.json(ErsUserss);

    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
});

// Retrieves a single ErsUsers object by ID
ErsUsersRouter.get('/:id', async (request, response, next) => {
    const id: number = parseInt(request.params.id);

    let ErsUsers: ErsUsers;

    try {
        ErsUsers = await ErsUsersService.getUserById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!ErsUsers) {
        response.sendStatus(404);
    } else {
        response.json(ErsUsers);
    }
    next();
});

// Creates a new ErsUsers
ErsUsersRouter.post('', async (request, response, next) => {
    const ErsUsers = request.body;
    let newErsUsers: ErsUsers;
    try {
        newErsUsers = await ErsUsersService.saveUSer(ErsUsers);
        response.status(201);
        response.json(newErsUsers);
    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
});

// Updates an existing ErsUsers
ErsUsersRouter.patch('', async (request, response, next) => {
    const ErsUsers = request.body;
    let updatedErsUsers: ErsUsers;

    try {
        updatedErsUsers = await ErsUsersService.getUserById(ErsUsers);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedErsUsers) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedErsUsers);
    }
    next();
});

// Deletes an existing ErsUsers
ErsUsersRouter.delete('/:id', async (request, response, next) => {
    const id = parseInt(request.params.id);
    let deletedErsUsers: ErsUsers;

    try {
        deletedErsUsers = await ErsUsersService.deleteUser(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!deletedErsUsers) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(deletedErsUsers);
    }
    next();
});