import { db } from './db';
import { authentication} from '../models/authentication-model';
import {ErsReimb, ErsReimbRow} from '../models/ers_reimbursement-model';
import {ErsReimbStatus,ErsReimbStatusRow} from '../models/ers_reimbursement_status-model'

export async function getAllReimbursements(): Promise<ErsReimb[]>{
const sql = 'SELECT * FROM reimb_amount, reimb_submitted, reimb_resolved,\
 reimb_description, reimb_receipt, reimb_status FROM ers_reimbursement LEFT JOIN \
 ers_reimbursement_status \ ON ers_reimbursement.reimb_status_id = \
 ers_reimbursement_status.reimb_status_id';

const result = await db.query<ErsReimbRow>(sql, []);
return result.rows.map(ErsReimb.from);
};

export async function getReimbStatus(status: string): Promise<ErsReimb[]>{
const sql = 'SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status ON \
ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id \
WHERE ers_reimbursement_status.reimb_status = $1';

const result = await db.query<ErsReimbRow>(sql, [status]);
return result.rows.map(ErsReimb.from);
};


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
