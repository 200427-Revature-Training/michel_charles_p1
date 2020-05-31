import { ErsUsers } from '../models/ers_users-model';
import * as ersUsersDao from '../daos/ers_users-dao';

export async function getAllUsers(): Promise<ErsUsers[]> {
return ersUsersDao.getAllUsers();
};

export async function getUserById(id: number): Promise<ErsUsers> {
return ersUsersDao.getUserById(id);
};

export async function saveUSer(ersUsers: any): Promise<ErsUsers> {
const newErsUsers = new ErsUsers(
undefined,
ersUsers.userName,
ersUsers.password,
ersUsers.firstName,
ersUsers.lastName,
ersUsers.email,
ersUsers.roleId
);

if (
ersUsers.userName &&
ersUsers.password &&
ersUsers.firstName &&
ersUsers.lastName &&
ersUsers.email &&
ersUsers.roleId
){
return ersUsersDao.saveUSer(newErsUsers);
} else {
return new Promise((resolve, reject) => reject(422));
};
}

export async function patchUser(input: any): Promise<ErsUsers> {

const ersUsers = new ErsUsers(
input.id,
input.userName,
input.password,
input.firstName,
input.lastName,
input.email,
input.roleID
);

if (!ersUsers.id){
throw new Error ('400');
}
return ersUsersDao.patchUser(ersUsers);
};

export async function deleteUser(id: number): Promise<ErsUsers> {
return ersUsersDao.deleteUser(id);
};
