export class ErsReimb{
id: number;
amount: number;
submitted: Date;
resolved: Date;
description: string;
receipt: string;
author: number;
resolver: number;
statusId: number;
typeId: number


static from (obj:ErsReimbRow): ErsReimb{
const ersReimb = new ErsReimb(
obj.reimb_id, obj.reimb_amount, obj.reimb_submitted, obj.reimb_resolved,
obj.reimb_description, obj.reimb_receipt, obj.reimb_author, obj.reimb_resolver,
obj.reimb_status_id, obj.reimb_type_id);
return ersReimb;
}


constructor(
id: number,
amount: number,
submitted: Date,
resolved: Date,
description: string,
receipt: string,
author: number,
resolver: number,
statusId: number,
typeId: number){
this.id = id;
this.amount = amount;
this.submitted = submitted;
this.resolved = resolved;
this.description = description;
this.receipt = receipt;
this.author = author;
this.resolver = resolver;
this.statusId = statusId;
this.typeId = typeId;
}
};


export interface ErsReimbRow{
reimb_id: number;
reimb_amount: number;
reimb_submitted: Date;
reimb_resolved: Date;
reimb_description: string;
reimb_receipt: string;
reimb_author: number;
reimb_resolver: number;
reimb_status_id: number;
reimb_type_id: number;
};