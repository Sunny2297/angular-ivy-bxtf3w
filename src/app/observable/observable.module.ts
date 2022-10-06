import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalAndTimerComponent } from './interval-and-timer/interval-and-timer.component';

@NgModule({
  imports: [CommonModule],
  exports: [FromEventComponent, IntervalAndTimerComponent],
  declarations: [FromEventComponent, IntervalAndTimerComponent],
})
export class ObservableModule {}
