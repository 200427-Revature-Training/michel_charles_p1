import {db} from './db';
import {ErsReimb, ErsReimbRow} from '../models/ers_reimbursement-model';
import {authentication, authenticationRow} from '../models/authentication-model';

export async function getReimbursements(): Promise<ErsReimb[]>{
const sql = 'SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status \
ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id';

const result = await db.query<ErsReimbRow>(sql, []);
console.log(result);
return result.rows.map(ErsReimb.from);
}


export async function getReimbsById(id: number): Promise<ErsReimb[]>{
const sql = 'SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status \
ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id \
WHERE ers_reimbursement.reimb_author = $1';

const result = await db.query<ErsReimbRow>(sql, [id]);
return result.rows.map(ErsReimb.from);
}


export async function postReimbs(ersReimb: ErsReimb): Promise <ErsReimb>{
const sql = `INSERT INTO ers_reimbursement (reimb_amount, reimb_submitted, reimb_resolved, \
reimb_description, reimb_receipt, reimb_author, reimb_resolver, reimb_status_id, \
reimb_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;


const result = await db.query<ErsReimbRow>(sql, [
ersReimb.amount,
ersReimb.submitted,
ersReimb.resolved,
ersReimb.description,
ersReimb.receipt,
ersReimb.author,
ersReimb.resolver,
ersReimb.statusId,
ersReimb.typeId
]);
return result.rows.map(ErsReimb.from)[0];
};

export async function authCheck(Authentication: authentication): Promise<authentication>{
const checkUser:boolean = await userExists(Authentication.authUserName);
if(!checkUser){
return undefined;
}

const sql = 'SELECT ers_username, ers_password, user_role FROM ers_users LEFT JOIN \
ers_user_roles ON ers_users_id = ers_user_role_id WHERE ers_users.ers_username = $1 ';

const result = await db.query<authenticationRow>(sql, [
Authentication.authUserName
]);

return result.rows.map(authentication.from)[0];
}

export async function userExists(authUserName: string): Promise<boolean>{
const sql = `SELECT EXISTS(SELECT ers_username FROM ers_users WHERE ers_username = $1)`;
const result = await db.query<Exists>(sql, [authUserName]);
return result.rows[0].exists;
}

interface Exists{
exists: boolean;
}