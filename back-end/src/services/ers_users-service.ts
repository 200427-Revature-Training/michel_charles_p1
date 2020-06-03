import { ErsUsers } from '../models/ers_users-model';
import * as ErsUserssDao from '../daos/ers_users-dao';

export async function getAllUsers(): Promise<ErsUsers[]> {
return ErsUserssDao.getAllUsers();
};

export async function getUserById(id: number): Promise<ErsUsers> {
return ErsUserssDao.getUserById(id);
};

export async function saveUSer(ErsUserss: any): Promise<ErsUsers> {
const newErsUserss = new ErsUserss(
undefined,
ErsUserss.userName,
ErsUserss.password,
ErsUserss.firstName,
ErsUserss.lastName,
ErsUserss.email,
ErsUserss.roleId
);

if (
ErsUserss.userName &&
ErsUserss.password &&
ErsUserss.firstName &&
ErsUserss.lastName &&
ErsUserss.email &&
ErsUserss.roleId
){
return ErsUserssDao.saveUSer(newErsUserss);
} else {
return new Promise((resolve, reject) => reject(422));
};
}

export async function patchUser(input: any): Promise<ErsUsers> {

const ErsUserss = new ErsUsers(
input.id,
input.userName,
input.password,
input.firstName,
input.lastName,
input.email,
input.roleID
);

if (!ErsUserss.id){
throw new Error ('400');
}
return ErsUserssDao.patchUser(ErsUserss);
};

export async function deleteUser(id: number): Promise<ErsUsers> {
return ErsUserssDao.deleteUser(id);
};
