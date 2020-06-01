import { db } from '../daos/db';
import { ErsReimb, ErsReimbRow } from '../models/ers_reimbursement-model';


export async function getAllReimbs(): Promise<ErsReimb[]> {

const sql = 'SELECT * FROM ers_reimbursement';

const result = await db.query<ErsReimbRow>(sql, []);
return result.rows.map(ErsReimb.from);
};


export async function getReimbById(id: number): Promise<ErsReimb>{

const sql = 'SELECT FROM * ers_reimbursement WHERE reimb_id = $1';

const result = await db.query<ErsReimbRow>(sql, [id]);
return result.rows.map(ErsReimb.from)[0];
};


export async function saveReimb(ersreimb: ErsReimb): Promise<ErsReimb>{

const sql = `INSERT INTO ers_reimbursement (reimb_amount, reimb_submitted, 
reimb_resolved, reimb_description, reimb_receipt, reimb_author, reimb_resolver, 
reimb_status_id, reimb_type_id) \ 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

const result = await db.query<ErsReimbRow>(sql, 
[ersreimb.amount, ersreimb.submitted, ersreimb.resolved,
ersreimb.description, ersreimb.receipt, ersreimb.author,
ersreimb.resolver, ersreimb.statusId, ersreimb.typeId]);

return result.rows.map(ErsReimb.from)[0];
};

export async function patchReimb(ersreimb: ErsReimb): Promise<ErsReimb>{

const sql = `UPDATE ers_reimbursement SET reimb_amount = COALESCE($1, reimb_amount), \
reimb_submitted = COALESCE($2, reimb_submitted), \ 
reimb_resolved = COALESCE ($3, reimb_resolved), \
reimb_description = COALESCE ($4, reimb_description), \
reimb_receipt = COALESCE ($5, reimb_receipt), \
reimb_author = COALESCE ($6, reimb_author), \
reimb_resolver = COALESCE ($7, reimb_resolver), \
reimb_status_id = COALESCE ($8, reimb_status_id), \
reimb_type_id = COALESCE ($9, reimb_type_id)
WHERE reimb_id = $10 RETURNING *`;

const result = await db.query<ErsReimbRow>(sql,[
ersreimb.amount,
ersreimb.submitted,
ersreimb.resolved,
ersreimb.description,
ersreimb.receipt,
ersreimb.author,
ersreimb.resolver,
ersreimb.statusId,
ersreimb.typeId
]);
return result.rows.map(ErsReimb.from)[0];
};


export async function deleteReimb(id: number): Promise<ErsReimb>{

const sql =`DELETE FROM ers_reimbursement WHERE reimb_id = $1 RETURNING *`;

const result = await db.query<ErsReimbRow>(sql, [id]);
return result.rows.map(ErsReimb.from)[0];
};


