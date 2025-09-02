import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(public tasksService: TasksService) {

  }

  get selectedUserTask() {
    return this.tasksService.getUserTask(this.userId);

  }
  onComplteTask(id: string) {


  }
  onStartTask() {
    this.isAddingTask = true;
  }
  onCloseTask() {
    this.isAddingTask = false;
  }


}
