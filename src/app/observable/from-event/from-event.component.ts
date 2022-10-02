import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  // * Observable Stream can created by following ways

  //  1. http request
  //  2. user input (click event)
  //  3. Array
  //  4. Object

  // * Observable handles

  // 1.Data
  // 2.error
  // 3.completion

  // .subscribe(
  //   (data=>{console.log(data) }),
  //   (error)=>{console.log(error)}),
  //   ()=>console.log("completion")
  // )

  @ViewChild('addBtn') addbutton: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addbutton.nativeElement,'click').subscribe((res)=>{  let value="vidio"+count++;
    this.print(value) })
  }

  print(val) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById('li').appendChild(el);
  }

  ngOnInit() {}
}
