import express from 'express';
import * as ErsUsersRolesService from '../services/ers_user_roles-service';
import { ErsUsersRoles } from '../models/ers_user_roles-model';

export const ErsUsersRolesRouter = express.Router();


ErsUsersRolesRouter.get('', async (request, response, next) => {
    let ErsUsersRoless: ErsUsersRoles[];

    try {
        ErsUsersRoless = await ErsUsersRolesService.getAllUserRoles();
        response.json(ErsUsersRoless);

    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
});


ErsUsersRolesRouter.get('/:id', async (request, response, next) => {
    const id: number = parseInt(request.params.id);

    let ErsUsersRoles: ErsUsersRoles;

    try {
        ErsUsersRoles = await ErsUsersRolesService.getUserRoleById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!ErsUsersRoles) {
        response.sendStatus(404);
    } else {
        response.json(ErsUsersRoles);
    }
    next();
});


ErsUsersRolesRouter.post('', async (request, response, next) => {
    const ErsUsersRoles = request.body;
    let newErsUsersRoles: ErsUsersRoles;
    try {
        newErsUsersRoles = await ErsUsersRolesService.saveUserRole(ErsUsersRoles);
        response.status(201);
        response.json(newErsUsersRoles);
    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
});


ErsUsersRolesRouter.patch('', async (request, response, next) => {
    const ErsUsersRoles = request.body;
    let updatedErsUsersRoles: ErsUsersRoles;

    try {
        updatedErsUsersRoles = await ErsUsersRolesService.patchUserRole(ErsUsersRoles);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedErsUsersRoles) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedErsUsersRoles);
    }
    next();
});


ErsUsersRolesRouter.delete('/:id', async (request, response, next) => {
    const id = parseInt(request.params.id);
    let deletedErsUsersRoles: ErsUsersRoles;

    try {
        deletedErsUsersRoles = await ErsUsersRolesService.deleteUserRole(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!deletedErsUsersRoles) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(deletedErsUsersRoles);
    }
    next();
});