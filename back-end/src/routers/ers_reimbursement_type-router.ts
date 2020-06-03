import express from 'express';
import * as ersReimbTypeService from '../services/ers_reimbursement_type-service';
import { ErsReimbType } from '../models/ers_reimbursement_type-model';

export const ersReimbTypeRouter = express.Router();

ersReimbTypeRouter.get('', async (request, response, next) => {
let ersReimbTypes : ErsReimbType[];

try{
ersReimbTypes = await ersReimbTypeService.getAllReimbTypes();
response.json(ersReimbTypes);
} catch (err){
response.sendStatus(500);
return;
}
next();

});

ersReimbTypeRouter.get('/:id', async (request, response,next) =>{
const id: number = parseInt(request.params.id);

let ersReimbType: ErsReimbType;

try{
ersReimbType = await ersReimbTypeService.getReimbTypeById(id);
} catch (err){
response.sendStatus(500);
return;
}
if (!ersReimbType){
response.sendStatus(404);
}else{
response.json(ersReimbType);
}
next();
}
);

ersReimbTypeRouter.post('', async (request, response, next) => {
    const ersReimbType = request.body;
    let newErsReimbType: ErsReimbType;
    try {
        newErsReimbType = await ersReimbTypeService.saveReimbType(ersReimbType);
        response.status(201);
        response.json(newErsReimbType);
    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
});

ersReimbTypeRouter.patch('', async (request, response, next) => {
    const ersReimbType = request.body;
    let updatedErsReimbType: ErsReimbType;

    try {
        updatedErsReimbType = await ersReimbTypeService.patchReimbType(ersReimbType);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedErsReimbType) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedErsReimbType);
    }
    next();
});


ersReimbTypeRouter.delete('/:id', async (request, response, next) => {
    const id = parseInt(request.params.id);
    let deletedErsReimbType: ErsReimbType;

    try {
        deletedErsReimbType = await ersReimbTypeService.deleteReimbType(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!deletedErsReimbType) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(deletedErsReimbType);
    }
    next();
});