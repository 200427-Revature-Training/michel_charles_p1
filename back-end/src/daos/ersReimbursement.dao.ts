import { db } from './db';
import {ErsReimb, ErsReimbRow} from '../models/ersReimb.model';
import {ErsReimbStatus,ErsReimbStatusRow} from '../models/ersReimbStatus.model'

export async function getAllReimbursements(): Promise<ErsReimb[]>{
const sql = 'SELECT * FROM reimb_amount, reimb_submitted, reimb_resolved,\
 reimb_description, reimb_receipt, reimb_status FROM ers_reimbursement LEFT JOIN \
 ers_reimbursement_status \ ON ers_reimbursement.reimb_status_id = \
 ers_reimbursement_status.reimb_status_id';

const result = await db.query<ErsReimbRow>(sql, []);
return result.rows.map(ErsReimb.from);
};

export async function getReimbById(id: number): Promise<ErsReimb> {
    const sql = 'SELECT * FROM ers_reimbursement WHERE reimb_id = $1';
    const result = await db.query<ErsReimb>(sql, [id]);
    console.log(result.rows[0]);
    return result.rows[0];

}


export async function getReimbStatus(status: string): Promise<ErsReimb[]>{
const sql = 'SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status ON \
ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id \
WHERE ers_reimbursement_status.reimb_status = $1';

const result = await db.query<ErsReimbRow>(sql, [status]);
return result.rows.map(ErsReimb.from);
};


export function saveReimb(ersReimb: ErsReimb): Promise<ErsReimb>{
const sql = 'UPDATE ers_reimbursement set reimb_resolved = $1, reimb_status_id = $2, reimb_resolver = $3 WHERE reimb_id =$4';

console.log('saving new entry');

return db.query<ErsReimbRow>(sql, [
ersReimb.resolved,
ersReimb.statusId,
ersReimb.resolver,
ersReimb.id
]).then (result => result.rows.map(row => ErsReimb.from(row))[0]);
}




export async function patchReimbStatus(ersReimbStatus: ErsReimbStatus): Promise<ErsReimbStatus>{
    const sql = 'UPDATE ers_reimbursement_status SET reimb_status = COALESCE($1, reimb_status) \
    WHERE reimb_status_id = $2 RETURNING *';

const result = await db.query<ErsReimbStatusRow>(sql, [
ersReimbStatus.status,
ersReimbStatus.id
]);
return result.rows.map(ErsReimbStatus.from)[0];
}


export async function sortedReimbursements(sorting: string): Promise<ErsReimb[]>{
const sql = 'SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status ON \
                ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id \
                ORDER BY $1';

    const result = await db.query<ErsReimbRow>(sql, [sorting]);
    return result.rows.map(ErsReimb.from);
}

export async function patchReimb(ersReimb: ErsReimb): Promise<ErsReimb>{
const sql = 'UPDATE ers_reimbursement set reimb_resolved= $1, reimb_status_id=$2, reimb_resolver=$3\
WHERE reimb_id= $4';

return db.query<ErsReimbRow>(sql, [
ersReimb.resolved,
ersReimb.statusId,
ersReimb.resolver,
ersReimb.id
]).then(result => result.rows.map(row => ErsReimb.from(row))[0]);
}