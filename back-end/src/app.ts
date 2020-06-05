import express from 'express';
import bodyParser from 'body-parser';
import { db } from './daos/db';
import { ersReimbRouter } from './routers/ers_reimbursement-router';
import { ersReimbStatusRouter } from "./routers/ers_reimbursement_status-router";
import { ersReimbTypeRouter } from "./routers/ers_reimbursement_type-router";
import { ErsUsersRolesRouter } from "./routers/ers_user_roles-router";
import { ErsUsersRouter } from "./routers/ers_users-router";

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
app.use('/reimb', ersReimbRouter);
app.use('/status', ersReimbStatusRouter);
app.use('/type', ersReimbTypeRouter);
app.use('/roles', ErsUsersRolesRouter);
app.use('/user', ErsUsersRouter);


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
    console.log(`Listening on http://localhost:${port}`);
});
