/*import express from 'express';
import bodyParser from 'body-parser';
import { db } from './daos/db';
import { ersReimbStatusRouter} from './routers/ers_reimbursement_status-router';

const app = express();

const port = process.env.PORT || 3000;

app.set('port', port);

app.use(bodyParser.json());

app.use((request, response, next) =>{
console.log('Request received - processing ar middleware 1');
next();
});


app.use('/ersReimbStatusRouter', ersReimbStatusRouter)


*/
