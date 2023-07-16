import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent implements OnInit {

  myTasks = [{taskName: 'Internship', reminderSet: false}];

  constructor() { };

  ngOnInit(): void { };

  onSubmit(form: NgForm) {

    this.myTasks.push({taskName: form.controls['task'].value, reminderSet: false});

  }
  
}
