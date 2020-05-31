import { ErsReimbStatus } from '../models/ers_reimbursement_status-model';
import * as ersReimbStatusDao from '../daos/ers_reimbursement_status-dao';


export async function getAllReimbStatuses(): Promise<ErsReimbStatus[]>{
return ersReimbStatusDao.getAllReimbStatuses();
};

export function getAllReimbStatusesById(id: number): Promise<ErsReimbStatus>{
return ersReimbStatusDao.getAllReimbStatusesById(id);
}

export async function saveReimbStatus(ersReimbStatus: ErsReimbStatus): Promise<ErsReimbStatus>{
const newErsReimbStatus = new ErsReimbStatus(
undefined,
ersReimbStatus.status
);

if (ersReimbStatus.status){
return ersReimbStatusDao.saveReimbStatus(newErsReimbStatus);
}else{
return new Promise((resolve, reject) => reject(422));
};
};

export async function patchReimbStatus(input: any): Promise<ErsReimbStatus>{

const ersReimbStatus = new ErsReimbStatus(
input.id,
input.status
);

if (!ersReimbStatus.id){
throw new Error ('400');
};

return ersReimbStatusDao.patchReimbStatus(ersReimbStatus);
};

export async function deleteReimbStatus(id: number): Promise<ErsReimbStatus>{
return ersReimbStatusDao.deleteReimbStatus(id);
};