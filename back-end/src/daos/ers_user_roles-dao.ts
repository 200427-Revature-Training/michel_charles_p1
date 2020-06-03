import { db } from '../daos/db';
import { ErsUsersRoles, ErsUsersRolesRow } from '../models/ers_user_roles-model';


export async function getAllUserRoles(): Promise<ErsUsersRoles[]> {

const sql = 'SELECT * FROM ers_user_roles';

const result = await db.query<ErsUsersRolesRow>(sql, []);
return result.rows.map(ErsUsersRoles.from);
};


export async function getUserRoleById(id: number): Promise<ErsUsersRoles>{

const sql = 'SELECT * FROM WHERE ers_user_role_id = $1';

const result = await db.query<ErsUsersRolesRow>(sql, [id]);

return result.rows.map(ErsUsersRoles.from)[0];
};


export async function saveUserRole(ersUsersRoles: ErsUsersRoles): Promise<ErsUsersRoles>{

const sql = 'INSERT INTO ers_user_roles (user_role) \
VALUES ($1) RETURNING *';

const result = await db.query<ErsUsersRolesRow>(sql, [ersUsersRoles.role]);
return result.rows.map(ErsUsersRoles.from)[0];
};

export async function patchUserRole(ersUsersRoles: ErsUsersRoles): Promise<ErsUsersRoles> {

const sql = `UPDATE ers_user_roles SET user_role = COALESCE($1, user_role)
WHERE ers_user_role_id = $2 RETURNING *`;

const result = await db.query<ErsUsersRolesRow>(sql, [
ersUsersRoles.id,
ersUsersRoles.role
]);
return result.rows.map(ErsUsersRoles.from)[0];
};


export async function deleteUserRole(id: number): Promise<ErsUsersRoles> {

const sql = `DELETE FROM ers_user_roles WHERE ers_user_role_id = $1 RETURNING *`;

const result = await db.query<ErsUsersRolesRow>(sql, [id]);
return result.rows.map(ErsUsersRoles.from)[0];
};