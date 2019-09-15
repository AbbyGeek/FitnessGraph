import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'Workout Records';

  constructor(private httpService: HttpClient) { }
  arrExercises: string[];

  ngOnInit() {
    this.httpService.get('./assets/Fitness.json').subscribe(
      data => {
        this.arrExercises = data as string [] //fills the array with data

        console.log(this.arrExercises);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }
}
