import { db } from '../daos/db';
import { ErsReimbStatus, ErsReimbStatusRow } from '../models/ers_reimbursement_status-model';


export async function getAllReimbStatuses(): Promise<ErsReimbStatus[]> {
const sql = 'SELECT * FROM ers_reimbursement_status';

return db.query<ErsReimbStatusRow>(sql, []).then(result => {

const rows: ErsReimbStatusRow[] = result.rows;
console.log(rows);

const ers_reimbursement_status: ErsReimbStatus[]= rows.map(row => ErsReimbStatus.from(row));
return ers_reimbursement_status;
})

}

export async function getAllReimbStatusesById(id: number): Promise<ErsReimbStatus>{

const sql = 'SELECT * FROM ers_reimbursement_status WHERE id = $1';

return db.query<ErsReimbStatusRow>(sql, [id])
.then(result => result.rows.map(row => ErsReimbStatus.from(row))[0]);
}

export async function saveReimbStatus(ersReimbStatus: ErsReimbStatus): Promise<ErsReimbStatus>{

const sql = `INSERT INTO ers_reimbursement_status (reimb_status) \
VALUES ($1) RETURNING *`;

const result = await db.query<ErsReimbStatusRow>(sql, [ersReimbStatus.status]);
return result.rows.map(ErsReimbStatus.from)[0];
};

export async function patchReimbStatus(ersReimbStatus: ErsReimbStatus): Promise<ErsReimbStatus>{

const sql = `UPDATE ers_reimbursement_status SET reimb_status = COALESCE($1, reimb_status) 
WHERE reimb_type_id = $2 RETURNING *`;

const result = await db.query<ErsReimbStatusRow>(sql, [ersReimbStatus.status, ersReimbStatus.id]);
return result.rows.map(ErsReimbStatus.from)[0];

}


export async function deleteReimbStatus(id: number): Promise<ErsReimbStatus>{

const sql = 'Delete FROM ers_reimbursement_status WHERE id = $1 RETURNING *';

const result = await db.query<ErsReimbStatusRow>(sql, [id]);
return result.rows.map(ErsReimbStatus.from)[0];

}

