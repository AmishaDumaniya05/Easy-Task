import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";
@ Injectable({providedIn : 'root'})
 export class TasksService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn the all the basic and advanced features of Angular & how to apply them',
            dueDate: '2025-12-11'

        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Bulid First Prototype',
            summary: 'Bulid First Prototype in Website',
            dueDate: '2025-08-02'

        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue Template',
            summary: 'Prepare and describe the issue templte of online website',
            dueDate: '2025-02-11'

        },

    ];
    constructor()
    {
        const tasks =localStorage.getItem('tasks');
      if (tasks)
      {
        this.tasks=JSON.parse(tasks)
      }
    }
    getUserTask(userId: string) {
        return this.tasks.filter((task) => task.userId === userId)
    }
    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date


        });
        this.saveTask();
    }
    removeTask(id:string)
    {
             this.tasks=this.tasks.filter((task)=>task.id !== id);
             this.saveTask();
    }
    private saveTask()
    {
        localStorage.setItem('tasks',JSON.stringify(this.tasks));


    }
}