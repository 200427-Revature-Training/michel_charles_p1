import { db } from '../daos/db';
import { ErsReimbType, ErsReimbTypeRow } from '../models/ers_reimbursement_type-model';

export async function getAllReimbTypes(): Promise<ErsReimbType[]>{

const sql = 'SELECT * FROM ers_reimbursement_type';

const result = await db.query<ErsReimbTypeRow>(sql, []);
return result.rows.map(ErsReimbType.from);
};

export async function getReimbTypeById(id: number): Promise<ErsReimbType> {

const sql = 'SELECT * FROM ers_reimbursement_type WHERE id = $1';

const result = await db.query<ErsReimbTypeRow>(sql, [id]);
return result.rows.map(ErsReimbType.from)[0];
};

export async function saveReimbType(ersReimbType: ErsReimbType): Promise<ErsReimbType>{
const sql =`INSERT into ers_reimbursement_type (reimb_type)
VALUES ($1) RETURNING *`;

const result = await db.query<ErsReimbTypeRow>(sql, [ersReimbType.type]);
return result.rows.map(ErsReimbType.from)[0];
};

export async function patchReimbType(ersReimbType: ErsReimbType): Promise <ErsReimbType>{

const sql = `UPDATE ers_reimbursement_type SET reimb_type = COALESCE($1, reimb_type), 
WHERE reimb_type_id = $2 RETURNING *`;

const result = await db.query<ErsReimbTypeRow>(sql, [ersReimbType.type, ersReimbType.id]);
return result.rows.map(ErsReimbType.from)[0];
};


export async function deleteReimbType(id: number): Promise<ErsReimbType>{

const sql = `DELETE FROM ers_reimbursement_type WHERE reimb_type_id = $1 RETURNING *`;

const result = await db.query<ErsReimbTypeRow>(sql, [id]);
return result.rows.map(ErsReimbType.from)[0];
};