import { Component, OnInit } from '@angular/core';
import { interval, Subscription ,timer} from 'rxjs';

@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrls: ['./interval-and-timer.component.css']
})
export class IntervalAndTimerComponent implements OnInit {
   vidioSubscribe =Subscription;
  
  constructor(   ) { }


msg;
  ngOnInit():void {
  // const  broadcastVidio = interval(1000);
   const  broadcastVidio = timer(2000,1000);  //timer(delay,interval time)
   this.vidioSubscribe.EMPTY= broadcastVidio.subscribe(res=> {
     this.msg='Vidio '+res;
     if(res==5){
      this.vidioSubscribe.EMPTY.unsubscribe();
     }
   })

  


  

}
}