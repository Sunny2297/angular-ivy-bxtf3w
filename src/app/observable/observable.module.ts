import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalAndTimerComponent } from './interval-and-timer/interval-and-timer.component';
import { OfAndFromOperatorComponent } from './of-and-from-operator/of-and-from-operator.component';
import { ToArrayComponent } from './to-array/to-array.component';

@NgModule({
  imports: [CommonModule],
  exports: [FromEventComponent, IntervalAndTimerComponent,OfAndFromOperatorComponent,ToArrayComponent],
  declarations: [FromEventComponent, IntervalAndTimerComponent,OfAndFromOperatorComponent,ToArrayComponent],
})
export class ObservableModule {}
