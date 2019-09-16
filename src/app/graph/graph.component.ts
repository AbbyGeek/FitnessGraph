import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { timeInterval } from 'rxjs/operators';



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  title = 'Workout Graph';
  chartOptions = {
    responsive: true,

    spanGaps: true,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        time: {
          unit:'week',
          displayFormats: {
            week: 'MM/DD'
          },
          min: '04/15'
        }
      }]
    }

  };
  pipe = new DatePipe("en-us");

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [];
   // CHART COLOR.
   colors = []

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

  workoutData: any[] = [];



  ngOnInit() {
    this.httpService.get('./assets/FitnessData.json').subscribe(
      data => {
        this.arrWorkouts = data as string [] //fills the array with data
        console.log(this.arrWorkouts);
        for(var i=0; i < this.arrWorkouts.length; i++)
        {
          var workoutDate = new Date(this.arrWorkouts[i].Date);
          this.arrDates.push(this.pipe.transform(workoutDate, "MM/dd"));

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
        var deadliftObj = {label: "Deadlift", data: this.arrDeadlift, fill:'none', backgroundColor: "#FFC857", borderColor:"#FFC857"}
        var dbellRowObj = {label: "DbellRow", data: this.arrDbellRow, fill:'none', backgroundColor: "#E9724C", borderColor: "#E9724C"}
        var bbellPressObj = {label: "BbellPress", data: this.arrBbellPress, fill:'none', backgroundColor: "#C5283D", borderColor: "#C5283D"}
        var squatObj = {label: "Squat", data: this.arrSquat, fill:'none', backgroundColor: "#481D24", borderColor: "#481D24"}
        var latPullObj = {label: "LatPull", data: this.arrLatPull, fill:'none', backgroundColor:"#255F85", borderColor:"#255F85"}
        var benchPressObj = {label: "BenchPress", data: this.arrBenchPress, fill:'none', backgroundColor:"#8A4F7D", borderColor:"#8A4F7D"}
        this.chartData.push(deadliftObj, dbellRowObj, bbellPressObj, squatObj, latPullObj, benchPressObj);

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }
}
