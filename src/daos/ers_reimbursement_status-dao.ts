import { db } from '../daos/db';
import { ErsReimbStatus, ErsReimbStatusRow } from '../models/ers_reimbursement_status-model';


export function getAllReimbStatus(): Promise<ErsReimbStatus[]> {
const sql = 'SELECT * From ers_reimbursement_status';

return db.query<ErsReimbStatusRow>(sql, []).then(result => {

const rows: ErsReimbStatusRow[] = result.rows;
console.log(rows);

const ers_reimbursement_status: ErsReimbStatus[]= rows.map(row => ErsReimbStatus.from(row));
return ers_reimbursement_status;
})

.catch(err => {
console.log(err);
return undefined;
});
}

