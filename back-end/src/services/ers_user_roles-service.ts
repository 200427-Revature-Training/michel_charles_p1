import { ErsUsersRoles } from '../models/ers_user_roles-model';
import * as ErsUsersRolesDao from '../daos/ers_user_roles-dao';

export async function getAllUserRoles(): Promise<ErsUsersRoles[]> {
return ErsUsersRolesDao.getAllUserRoles();
};

export async function getUserRoleById(id: number): Promise<ErsUsersRoles> {
return ErsUsersRolesDao.getUserRoleById(id);
};

export async function saveUserRole(ErsUsersRoles: any): Promise<ErsUsersRoles>{
const newErsUsersRoles = new ErsUsersRoles(
undefined,
ErsUsersRoles.role
);

if (ErsUsersRoles.roles){
return ErsUsersRolesDao.saveUserRole(newErsUsersRoles);
} else {
return new Promise((resolve, reject) => reject(422));
};
};

export async function patchUserRole(input: any): Promise<ErsUsersRoles> {
const ersUsersRoles = new ErsUsersRoles(
input.id,
input.role
);

if (!ersUsersRoles.id){
throw new Error ('400');
}

return ErsUsersRolesDao.patchUserRole(ersUsersRoles);
};

export async function deleteUserRole(id: number): Promise<ErsUsersRoles> {
return ErsUsersRolesDao.deleteUserRole(id);
};