import { Component ,Input, inject} from '@angular/core';
import {  type Task } from './task.model';

import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',

  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required:true}) task !:Task;
   
private tasksService = inject(TasksService);

onComplteTask()
{
  this.tasksService.removeTask(this.task.id);

  
}


}
