export class Item {
    private shortDes: string;
    private status: boolean;    // if done then 'true' otherwise 'false'

    constructor(des: string, sts: boolean) {
        this.shortDes = des;
        this.status = sts;
    }

    getShortDes() :string {
        return this.shortDes;
    }
    getStatus() :boolean {
        return this.status;
    }

    updateShortDes(des:string) {
        this.shortDes = des;
    }
    updateStatus(sts:boolean) {
        this.status = sts;
    }

};