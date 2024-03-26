import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // viewchildren task
  @Input() name : any= "";

  tasks = ['Task 1', 'Task 2'];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
    
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  
}
