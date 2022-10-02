import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromEventComponent } from './from-event/from-event.component';
import { AllComponent } from './all/all.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    FromEventComponent,AllComponent
  ],
  declarations: [FromEventComponent,AllComponent]
})
export class ObservableModule { }