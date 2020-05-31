import express from 'express';
import * as ersReimbStatusService from '../services/ers_reimbursement_status-service';
import { ErsReimbStatus } from '../models/ers_reimbursement_status-model';

export const ersReimbStatusRouter = express.router();

ersReimbStatusRouter.get('', async (request, response, next) =>{
let ersreimbstatuses: ErsReimbStatus[];

try{
ersreimbstatuses = await ersReimbStatusService.getAllReimbStatuses();
response.json(ersreimbstatuses);
} catch (err) {
response.sendStatus(500);
return;
}
next();
});

ersReimbStatusRouter.get('/:id', async (request, response, next) => {
const id: number = parseInt(request.params.id);

let ersReimbStatus: ErsReimbStatus;

try{
ersReimbStatus = await ersReimbStatusService.getAllReimbStatusesById(id);
} catch (err){
response.sendStatus(500);
return;
}

if (!ersReimbStatus){
response.sendStatus(404);
} else {
response.json(ersReimbStatus);
}
next();
});

ersReimbStatusRouter.post('', async (request, response, next) =>{
const ersReimbStatus = request.body;
let newErsReimbStatus: ErsReimbStatus;
try{
newErsReimbStatus = await ersReimbStatusService.saveReimbStatus(ersReimbStatus);
response.status(201);
response.json(newErsReimbStatus);
} catch (err){
response.sendStatus(500);
return;
}
next ();
});

ersReimbStatusRouter.patch('', async (request, response, next) =>{
const ersReimbStatus = request.body;
let updatedErsReimbStatus: ErsReimbStatus;

try{
updatedErsReimbStatus = await ersReimbStatusService.patchReimbStatus(ersReimbStatus);
} catch (err){
response.sendStatus(500);
return;
}

if (!updatedErsReimbStatus){
response.sendStatus(404);
} else {
response.status(200);
response.json(updatedErsReimbStatus);
}
next();
});

ersReimbStatusRouter.delete('/:id', async (request, response, next) =>{
const id = parseInt(request.params.id);
let deletedErsReimbStatus: ErsReimbStatus;

try{
deletedErsReimbStatus = await ersReimbStatusService.deleteReimbStatus(id);
} catch (err){
response.sendStatus(500);
return;
};

if(!deletedErsReimbStatus){
response.sendStatus(404);
} else{
response.status(200);
response.json(deletedErsReimbStatus);
}
next();
}
);