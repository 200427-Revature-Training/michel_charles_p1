import express, {response} from 'express'
import * as ersReimbService from '../services/ersReimbursement.service'

const jwt = require ('jsonwebtoken');

export const ersReimbRouter = express.Router();

const reimb = [];
const key = 'justakey'

const token = (req:any, res:any, next:any) =>{

const auth = req.headers.authorization;
const authToken = auth && auth.split('')[1];

if(authToken == null)
return res.sendStatus(401);

jwt.verify(authToken, key, (err:any, user:any) =>{
    console.log('verified');
    if (err){
        console.log(err);
        return res.sendStatus(403);
    }
    req.user = user;
    next ();
})
}


ersReimbRouter.get('', token, (request, response, next) =>{
ersReimbService.getAllReimbs().then(reimb =>{
response.json(reimb);
next();
}).catch(err =>{
console.log(err);
response.sendStatus(500);
});
});

ersReimbRouter.get('/:id', token, (request, response, next)=>{
const id = +request.params.id;

ersReimbService.getReimbsById(id).then(reimb =>{
response.json(reimb);
next();
}).catch (err => {
console.log(err);
response.sendStatus(500);
});
});


ersReimbRouter.post('', token, (request, response, next) =>{
const postReimb = request.body;
ersReimbService.saveReimb(postReimb)
.then(newPost =>{
response.json(newPost);
}).catch(err =>{
response.sendStatus(500);
}).finally(() => {
next ();
});
});


ersReimbRouter.patch('', token, (request, response, next) =>{
const patchReimb = request.body;

ersReimbService.patchReimb(patchReimb)
.then(newPatch =>{
response.json(newPatch);
}).catch (err =>{
response.sendStatus(500);
}).finally(() =>{
next();
})
});