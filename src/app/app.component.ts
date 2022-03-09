import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todoItem: string = '';
  public todoList: Array<any> = [];
  title = 'todo-app';

  handleAddBtn() {
    this.todoList.push(this.todoItem);
    console.log(this.todoList);
  }
  handleDeleteBtn(i: any) {
    this.todoList.splice(i,1);
  }
  handleClearBtn() {
   
    this.todoList =[];
  }
}
