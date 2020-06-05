export class authentication{
authUserName: string;
authPassword: string;

static from (obj: authenticationRow): authentication{
const Authentication = new authentication(
obj.userName,
obj.password
);

return Authentication;
}

constructor( authUserName: string, authPassword: string){
this.authUserName = authUserName;
this.authPassword = authPassword;
}
}

export interface authenticationRow{
userName: string;
password: string;
}












