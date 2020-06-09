import * as ersReimbDao from '../daos/ersReimbursement.dao';
import {ErsReimb} from '../models/ersReimb.model';

export function  getAllReimbs(): Promise<ErsReimb[]>{
return ersReimbDao.getAllReimbursements();
}

export function getReimbsById(id: number):Promise<ErsReimb>{
    return ersReimbDao.getReimbById(id);
}

export function saveReimb(ersReimb: ErsReimb): Promise<ErsReimb>{
console.log(ersReimb);

const newErsReimb = new ErsReimb(
ersReimb.id,
ersReimb.amount,
ersReimb.submitted,
ersReimb.resolved,
ersReimb.description,
ersReimb.receipt,
ersReimb.author,
ersReimb.resolver,
ersReimb.statusId,
ersReimb.typeId
);

if(newErsReimb.amount &&
newErsReimb.submitted &&
newErsReimb.resolved &&
newErsReimb.description &&
newErsReimb.receipt &&
newErsReimb.author &&
newErsReimb.resolver &&
newErsReimb.statusId &&
newErsReimb.typeId){
return ersReimbDao.saveReimb(newErsReimb);
} else {
return new Promise ((resolve, reject) => reject (422));
}
}


export function patchReimb(ersReimb: ErsReimb): Promise<ErsReimb>{
return ersReimbDao.patchReimb(ersReimb);
};