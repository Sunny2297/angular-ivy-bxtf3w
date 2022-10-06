import { Component, OnInit } from '@angular/core';
import { interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
//Collects all source emissions and emits them as an array when the source completes.
  constructor() { }

  ngOnInit() {
    const source = interval(1000);
const example = source.pipe(
  take(10),
  toArray()
);

example.subscribe(value => console.log(value));
  }

}