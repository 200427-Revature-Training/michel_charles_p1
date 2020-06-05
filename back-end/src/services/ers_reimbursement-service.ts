import { ErsReimb } from '../models/ers_reimbursement-model';
import * as ersReimbDao from '../daos/ers_reimbursement-dao';


export async function getAllReimbs(): Promise<ErsReimb[]> {
return ersReimbDao.getAllReimbs();
};

export async function getReimbById(id: number): Promise<ErsReimb> {
return ersReimbDao.getReimbById(id);
};

export async function saveReimb(ersreimb: any): Promise<ErsReimb> {
const newErsReimb = new ErsReimb(
ersreimb.id,
ersreimb.amount,
ersreimb.submitted,
ersreimb.resolved,
ersreimb.description,
ersreimb.receipt,
ersreimb.author,
ersreimb.resolver,
ersreimb.statusId,
ersreimb.typeId
);

if
(ersreimb.amount &&
ersreimb.submitted &&
ersreimb.resolved &&
ersreimb.description &&
ersreimb.receipt &&
ersreimb.author &&
ersreimb.resolver &&
ersreimb.statusId &&
ersreimb.typeId){
return ersReimbDao.saveReimb(newErsReimb);
} else {
return new Promise ((resolve, reject) => reject (422));
}
}

export async function patchReimb(input: any): Promise<ErsReimb> {
const ersreimb = new ErsReimb(
input.id,
input.amount,
input.submitted,
input.resolved,
input.description,
input.receipt,
input.author,
input.resolver,
input.statusId,
input.typeId
);

if(!ersreimb.id){
throw new Error ('400');
};
return ersReimbDao.patchReimb(ersreimb);
};

export async function deleteReimb(id: number): Promise<ErsReimb> {
return ersReimbDao.deleteReimb(id);
};