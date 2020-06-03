export class ErsUsers {
id: number;
userName: string;
password: string;
firstName: string;
lastName: string;
email: string;
roleID: number;


static from (obj: ErsUsersRow): ErsUsers{
const ErsUserss= new ErsUsers(
obj.ers_users_id, obj.ers_username, obj.ers_password,
obj.user_first_name, obj.user_last_name, obj.user_email,
obj.user_role_id
);
return ErsUserss;
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


export interface ErsUsersRow {
ers_users_id: number;
ers_username: string;
ers_password: string;
user_first_name: string;
user_last_name: string;
user_email: string;
user_role_id: number;
};