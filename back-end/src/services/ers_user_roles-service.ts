import { ErsUserRoles } from '../models/ers_user_roles-model';
import * as ersUserRolesDao from '../daos/ers_user_roles-dao';

export async function getAllUserRoles(): Promise<ErsUserRoles[]> {
return ersUserRolesDao.getAllUserRoles();
};

export async function getUserRoleById(id: number): Promise<ErsUserRoles> {
return ersUserRolesDao.getUserRoleById(id);
};

export async function saveUserRole(ersUserRoles: any): Promise<ErsUserRoles>{
const newErsUserRoles = new ErsUserRoles(
undefined,
ersUserRoles.role
);

if (ersUserRoles.roles){
return ersUserRolesDao.saveUserRole(newErsUserRoles);
} else {
return new Promise((resolve, reject) => reject(422));
};
};

export async function patchUserRole(input: any): Promise<ErsUserRoles> {
const ersUserRoles = new ErsUserRoles(
input.id,
input.role
);

if (!ersUserRoles.id){
throw new Error ('400');
}

return ersUserRolesDao.patchUserRole(ersUserRoles);
};

export async function deleteUserRole(id: number): Promise<ErsUserRoles> {
return ersUserRolesDao.deleteUserRole(id);
};