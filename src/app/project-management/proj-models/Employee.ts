

export class Employee {
    public id: string;
    public name?: string;
    public designation?: string;
    public experience?: number;
    public suitable?: number;
    public days?: number;
    public displayDays?: string;
    
    public team?: string;

    constructor(
    ) {
        this.id = '';
        this.name = '';
        this.designation = '';
        this.experience = 0;
        this.suitable = 0;
        this.days = 0;
        this.displayDays = '';
        this.team = '';
    }
}