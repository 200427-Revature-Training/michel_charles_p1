export class ErsUserRoles {
id: number;
userName: string;
password: string;
firstName: string;
lastName: string;
email: string;
roleID: number;


static from (obj: ErsUserRolesRow): ErsUserRoles{
const ersUserRoles = new ErsUserRoles(
obj.ers_users_id, obj.ers_username, obj.ers_password,
obj.user_first_name, obj.user_last_name, obj.user_email,
obj.user_role_id
);
return ersUserRoles;
};


constructor(
id: number,
userName: string,
password: string,
firstName: string,
lastName: string,
email: string,
roleID: number,
){
this.id =id;
this.userName = userName;
this.password = password;
this.firstName = firstName;
this.lastName = lastName;
this.email = email;
this.roleID = roleID;
};
};


export interface ErsUserRolesRow {
ers_users_id: number;
ers_username: string;
ers_password: string;
user_first_name: string;
user_last_name: string;
user_email: string;
user_role_id: number;
};