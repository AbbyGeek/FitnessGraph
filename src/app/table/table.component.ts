import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  title = 'Workout Records';








  constructor(private httpService: HttpClient) { }
  arrExercises: string[];

  ngOnInit() {
    this.httpService.get('./assets/FitnessData.json').subscribe(
      data => {
        this.arrExercises = data as string[] //fills the array with data

        var properties = [
          'date',
          'deadlift',
          'dbell_row',
          'bbell_press',
          'squat',
          'lat_pull',
          'bench_press'
        ]
        $.each(properties, function (i, val) {
          var orderClass = '';

          $("#" + val).click(function (e) {
            e.preventDefault();
            $('.filter-link.filter-link--active').not(this).removeClass('filter-link--active');
            $(this).toggleClass('filter-link--active');
            $('.filter-link').removeClass('asc desc');

            if (orderClass == 'desc' || orderClass == '') {
              $(this).addClass('asc');
              orderClass = 'asc';
            }
            else {
              $(this).addClass('desc');
              orderClass = 'desc';
            }
            var parent = $(this).closest('.header-item');
            var index = $(".header-item").index(parent);
            var $table = $('.table-content');
            var rows = $table.find('.table-row').get();
            var isSelected = $(this).hasClass('filter-link--active');
            var isNumber = $(this).hasClass('filter-link--number');

            rows.sort(function (a, b) {
              var x = Number($(a).find('.table-data').eq(index).text());
              var y = Number($(b).find('.table-data').eq(index).text());

              if (isNumber == true) {

                if (isSelected) {
                  return x - y;
                } else {
                  return y - x;
                }

              } else {

                if (isSelected) {
                  if (x < y) return -1;
                  if (x > y) return 1;
                  return 0;
                } else {
                  if (x > y) return -1;
                  if (x < y) return 1;
                  return 0;
                }
              }
            });

            $.each(rows, function (index, row) {
              $table.append(row);
            });

            return false;
          });

        });

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }
}
