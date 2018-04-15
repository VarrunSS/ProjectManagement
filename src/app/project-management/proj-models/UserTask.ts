

export class UserTask {
    constructor() {
        this.id = '';
        this.name = '';
        this.designation = '';
        this.experience = '';
        this.team = '';

        this.taskType = '';
        this.summary = '';
        this.difficulty = '';
        this.completionInDays = 0;
    }

    public id: string;
    public name: string;
    public designation: string;
    public experience: string;
    public team: string;

    public taskType: string;
    public summary: string;
    public difficulty: string;
    public completionInDays: number;
}