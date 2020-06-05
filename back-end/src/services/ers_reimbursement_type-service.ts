import { ErsReimbType } from '../models/ers_reimbursement_type-model';
import * as ersReimbTypeDao from '../daos/ers_reimbursement_type-dao';

export async function getAllReimbTypes(): Promise<ErsReimbType[]> {
return ersReimbTypeDao.getAllReimbTypes();
};

export async function getReimbTypeById(id: number): Promise<ErsReimbType>{
return ersReimbTypeDao.getReimbTypeById(id);
};

export async function saveReimbType(ersReimbType: any): Promise<ErsReimbType> {
const newErsReimbType = new ErsReimbType(
ersReimbType.id,
ersReimbType.type,
);

if (ersReimbType.type){
return ersReimbTypeDao.saveReimbType(newErsReimbType);
} else {
return new Promise((resolve, reject) => reject (422));
};
};

export async function patchReimbType(input:any): Promise<ErsReimbType>{

const ersReimbType = new ErsReimbType(
input.id,
input.type
);

if (!ersReimbType.id){
throw new Error ('400');
}
return ersReimbTypeDao.patchReimbType(ersReimbType);
};

export async function deleteReimbType(id: number): Promise<ErsReimbType> {
return ersReimbTypeDao.deleteReimbType(id);
};
