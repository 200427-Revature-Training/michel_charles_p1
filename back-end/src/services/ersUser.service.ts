import { ErsUsers } from '../models/ersUsers.model';
import * as ersUserDao from '../daos/ersUser.dao';

export function getUsers(): Promise<ErsUsers[]>{
return ersUserDao.getUsers();
}

export function newUser(ersUsers: ErsUsers): Promise<ErsUsers>{
return ersUserDao.addUser(ersUsers);
}

export function User(ersUsers: ErsUsers): Promise<ErsUsers>{
return ersUserDao.User(ersUsers);
}