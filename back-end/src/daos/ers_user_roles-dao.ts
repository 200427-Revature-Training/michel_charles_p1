import { db } from '../daos/db';
import { ErsUserRoles, ErsUserRolesRow } from '../models/ers_user_roles-model';


export async function getAllUserRoles(): Promise<ErsUserRoles[]> {

const sql = 'SELECT * FROM ers_user_roles';

const result = await db.query<ErsUserRolesRow>(sql, []);
return result.rows.map(ErsUserRoles.from);
};


export async function getUserRoleById(id: number): Promise<ErsUserRoles>{

const sql = 'SELECT * FROM WHERE ers_user_role_id = $1';

const result = await db.query<ErsUserRolesRow>(sql, [id]);

return result.rows.map(ErsUserRoles.from)[0];
};


export async function saveUserRole(ersUserRoles: ErsUserRoles): Promise<ErsUserRoles>{

const sql = 'INSERT INTO ers_user_roles (user_role) \
VALUES ($1) RETURNING *';

const result = await db.query<ErsUserRolesRow>(sql, [ersUserRoles.role]);
return result.rows.map(ErsUserRoles.from)[0];
};

export async function patchUserRole(ersUserRoles: ErsUserRoles): Promise<ErsUserRoles> {

const sql = `UPDATE ers_user_roles SET user_role = COALESCE($1, user_role)
WHERE ers_user_role_id = $2 RETURNING *`;

const result = await db.query<ErsUserRolesRow>(sql, [
ersUserRoles.id,
ersUserRoles.role
]);
return result.rows.map(ErsUserRoles.from)[0];
};


export async function deleteUserRole(id: number): Promise<ErsUserRoles> {

const sql = `DELETE FROM ers_user_roles WHERE ers_user_role_id = $1 RETURNING *`;

const result = await db.query<ErsUserRolesRow>(sql, [id]);
return result.rows.map(ErsUserRoles.from)[0];
};