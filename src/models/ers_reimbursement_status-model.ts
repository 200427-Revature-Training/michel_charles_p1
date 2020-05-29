export class ErsReimbStatus{
  id: number;
  status: string;

  static from (obj: ErsReimbStatusRow): ErsReimbStatus{
      const ersReimbStatus = new ErsReimbStatus(
          obj.reimb_status_id, obj.reimb_status
      );
      return ersReimbStatus;
  }

constructor(id: number, status: string){
    this.id = id;
    this.status = status;
}
}

export interface ErsReimbStatusRow{
    reimb_status_id: number;
    reimb_status: string;
};