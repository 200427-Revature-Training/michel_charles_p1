import { db } from '../daos/db';
import { ErsUsers, ErsUsersRow } from '../models/ers_users-model';


export async function getAllUsers(): Promise<ErsUsers[]> {

const sql = 'SELECT * FROM ers_users';

const result = await db.query<ErsUsersRow>(sql, []);
return result.rows.map(ErsUsers.from);
};


export async function getUserById(id: number): Promise<ErsUsers> {

const sql = 'SELECT * FROM ers_users WHERE ers_users_id = $1';

const result = await db.query<ErsUsersRow>(sql, [id]);
return result.rows.map(ErsUsers.from)[0];
};


export async function saveUSer(ErsUserss: ErsUsers): Promise<ErsUsers> {

const sql = `INSERT INTO ers_users (ers_username, ers_password, user_first_name,
user_last_name, user_email, user_role_id) \
VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

const result = await db.query<ErsUsersRow>(sql, [
ErsUserss.userName,
ErsUserss.password,
ErsUserss.firstName,
ErsUserss.lastName,
ErsUserss.email,
ErsUserss.roleID
]);

return result.rows.map(ErsUsers.from)[0];
}

export async function patchUser(ErsUserss: ErsUsers): Promise<ErsUsers> {

const sql = `UPDATE ers_users SET ers_username = COALESCE($1, ers_username), \
ers_password = COALESCE($2, ers_password), \
user_first_name = COALESCE($3, user_first_name), \
user_last_name = COALESCE($4, user_last_name), \
user_email = COALESCE($5, user_email), \
user_role_id = COALESCE($6, user_role_id)
WHERE ers_users_id = $7 RETURNING *`;

const result = await db.query<ErsUsersRow>(sql [
ErsUserss.userName,
ErsUserss.password,
ErsUserss.firstName,
ErsUserss.lastName,
ErsUserss.email,
ErsUserss.roleID,
ErsUserss.id
]);
return result.rows.map(ErsUsers.from)[0];
};


export async function deleteUser(id: number): Promise<ErsUsers> {

const sql = `DELETE FROM ers_users WHERE ers_users_id = $1 RETURNING *`;

const result = await db.query<ErsUsersRow>(sql, [id]);
return result.rows.map(ErsUsers.from)[0];
};