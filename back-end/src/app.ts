import express from 'express';
import bodyParser from 'body-parser';
import { db } from './daos/db';


const app = express();

const port = process.env.port || 3001;
app.set('port', port);

/*
    ? Middleware Registration
*/
app.use(bodyParser.json());

/*
    ? Router Registration
*/


/*
    Listen for SIGINT signal - issued by closing the server with ctrl+c
    This releases the database connections prior to app being stopped
*/
// process.on('SIGINT', () => {
//     db.end().then(() => {
//         console.log('Database pool closed');
//     });
// });

process.on('unhandledRejection', () => {
    db.end().then(() => {
        console.log('Database pool closed');
    });
});

app.listen(port, () => {
    console.log(`ERS is live! on http://localhost:${port}`);
    
});
