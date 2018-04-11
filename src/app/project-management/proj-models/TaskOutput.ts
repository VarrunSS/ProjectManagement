import { Employee } from "./Employee";
import { TaskDetail } from "./TaskDetail";


export class TaskOutput {

    public employees: Employee[];
    public taskDetail: TaskDetail;

    constructor(
    ) {
        this.employees = new Array();
        this.taskDetail = new TaskDetail();
    }
}