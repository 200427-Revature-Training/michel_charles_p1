import {db} from './db';
import {ErsUsers, ErsUsersRow} from '../models/ersUsers.model';


export async function getUsers(): Promise<ErsUsers[]>{
const sql = 'SELECT * FROM ers_users';

return db.query<ErsUsersRow> (sql, []).then (result =>{
const rows: ErsUsersRow[] = result.rows;
const users: ErsUsers[] = rows.map(row => ErsUsers.from(row));

return users;
})
};

export function addUser(ersUsers: ErsUsers): Promise<ErsUsers>{
const sql = 'INSERT INTO ers_users (ers_username, ers_password, user_first_name, user_last_name, user_email, user_role_id) \
VALUES ($1, $2, $3, $4, $5, $6)';

return db.query<ErsUsersRow>(sql, [
ersUsers.userName,
ersUsers.password,
ersUsers.firstName,
ersUsers.lastName,
ersUsers.email,
ersUsers.roleID
]). then(result => result.rows.map(row => ErsUsers.from(row))[0]);

}


export function User(ersUsers: ErsUsers): Promise<ErsUsers>{
const sql = 'SELECT * FROM ers_users WHERE ers_username=$1, user_email= $2';

return db.query<ErsUsersRow>(sql, [
ersUsers.userName,
ersUsers.email
]).then(result => result.rows.map(row => ErsUsers.from(row))[0]);
};