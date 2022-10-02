import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PromisesComponent } from './promises/promises.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableModule } from './observable/observable.module';


@NgModule({
  imports: [BrowserModule, FormsModule,ObservableModule],
  declarations: [AppComponent, HelloComponent,PromisesComponent,AsyncAwaitComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
