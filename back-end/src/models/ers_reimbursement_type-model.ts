export class ErsReimbType{
id: number;
type: string;


static from (obj: ErsReimbTypeRow): ErsReimbType{
const ersReimbType = new ErsReimbType(
obj.reimb_type_id, obj.reimb_type
);
return ersReimbType;
} 


constructor(id: number, type: string){
this.id = id;
this.type = type;
}
}


export interface ErsReimbTypeRow{
reimb_type_id: number;
reimb_type: string
}