export class ErsUsersRoles{
id: number;
role: string;


static from (obj: ErsUsersRolesRow): ErsUsersRoles{
const ErsUsersRoless = new ErsUsersRoles(
obj.ers_user_role_id, obj.user_role
);
return ErsUsersRoless;
}


constructor(id: number, role: string){
this.id = id;
this.role = role;
}
};




export interface ErsUsersRolesRow{
ers_user_role_id: number;
user_role: string;
};