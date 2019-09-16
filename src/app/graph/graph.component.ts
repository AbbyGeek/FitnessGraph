import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { isDate } from 'util';



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  title = 'Workout Graph';
  chartOptions = {
    responseive: true
  };


  labels  =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];



  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {

      label: '1st Year',
      data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
    },
    { 
      label: '2nd Year',
      data: [47, 9, 28, 54, 77, 51, 24]
    }
  ];
   // CHART COLOR.
   colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  onChartClick(event) {
    console.log(event);
  }

  constructor(private httpService: HttpClient) { }
  arrWorkouts: any[];
  arrDates: any[] = [];
  arrDeadlift: any[] = [];
  arrDbellRow: any[] = [];
  arrBbellPress: any[] = [];
  arrSquat: any[] = [];
  arrLatPull: any[] = [];
  arrBenchPress: any[] = [];
  arrData: any[] = [];



  ngOnInit() {
    this.httpService.get('./assets/Fitness.json').subscribe(
      data => {
        this.arrWorkouts = data as string [] //fills the array with data
        //console.log(this.arrExercises);
        console.log(this.arrWorkouts);
        // this.arrDates = this.arrExercises.sort();
        // this.labels =  this.arrDates;
        for(var i=0; i < this.arrWorkouts.length; i++)
        {
          var workoutDate = this.arrWorkouts[i].Date;
          this.arrDates.push(workoutDate);

          var Deadlift = this.arrWorkouts[i].Deadlift;
          this.arrDeadlift.push(Deadlift);

          var DbellRow = this.arrWorkouts[i].Dbell_Row;
          this.arrDbellRow.push(DbellRow);

          var BbellPress = this.arrWorkouts[i].Bbell_Press;
          this.arrBbellPress.push(BbellPress);

          var Squat = this.arrWorkouts[i].Squat;
          this.arrSquat.push(Squat);

          var LatPull = this.arrWorkouts[i].Lat_Pull;
          this.arrLatPull.push(LatPull);

          var BenchPress = this.arrWorkouts[i].Bench_Press;
          this.arrBenchPress.push(BenchPress);
        }
        this.arrData.push(this.arrBenchPress, this.arrLatPull, this.arrSquat, this.arrBbellPress, this.arrDbellRow, this.arrDeadlift);
        console.log(this.arrData);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }
}
