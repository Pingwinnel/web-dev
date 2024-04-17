export class Vacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: number;


    constructor(id:number=0,name:string="",description:string="",salary: number=0,company: number=-1) {
        this.id=id;
        this.name=name;
        this.description=description
        this.company=company
        this.salary=salary
    }
}
