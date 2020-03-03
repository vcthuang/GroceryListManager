import { Component, OnInit } from '@angular/core';
import { doesNotReject } from 'assert';

// we added bootstrap style for this project
@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: [
    './grocery.component.css',
    '../../assets/css/bootstrap.min.css',
  ]
})


export class GroceryComponent implements OnInit {
  
  // Initialize task - an item on the shopping list and 
  // tasks - the entire shopping list.
  task = {
    name: '',
    id: 0
  };
  
  // tasks {
  //   id: unique timestamp
  //   name: string holds shopping item
  //   strike: boolean tells if the task is done
  // }
  tasks = [];

  constructor() { }

  ngOnInit(): void {
  }

  // This function is called when the user click on the input box
  onClick(){
    
    // add an entry to tasks if it's a new shopping item
    if(this.task.id == 0){
      if (this.task.name) {
        this.tasks.push({id: (new Date()).getTime(),name: this.task.name, strike: false});
      }
    }
    
    // reset task or otherwise the shopping item will be shown on the input box 
    // which makes user input unfriendly.  It is also used to end editing an item.
    this.task = {
      name: '',
      id: 0
    };
    
    console.log(this.task);
    console.log(this.tasks);
  }

  // This function is called when the user clicks on pencil mark to modify an entry
  onEdit(item){
    this.task = item;
  }

  // This function is called when the user click on x mark to delete an entry
  onDelete(item){

    // loop through entire tasks.  If id matches, the entry is deleted from tasks
    for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
            this.tasks.splice(i,1);
            break;
        }
    }
  }

  // This function is called when the user click on the item to mark done or undone
  onStrike(item){

    // loop through entire tasks.  
    // If id matches, strike will be set to the opposite of the current state
    for(var i = 0;i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
        if(this.tasks[i].strike){
          this.tasks[i].strike = false;
        }
        else{
          this.tasks[i].strike = true;
        }
        break;
      }
    }
    console.log(this.tasks);
  }
}
