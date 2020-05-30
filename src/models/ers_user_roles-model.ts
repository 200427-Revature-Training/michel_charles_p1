export class ErsUserRoles{
id: number;
role: string;


static from (obj: ErsUserRolesRow): ErsUserRoles{
const ersUserRoles = new ErsUserRoles(
obj.ers_user_role_id, obj.user_role
);
return ersUserRoles;
}


constructor(id: number, role: string){
this.id = id;
this.role = role;
}
};




export interface ErsUserRolesRow{
ers_user_role_id: number;
user_role: string;
};