import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { BindingComponent } from './binding/binding.component';
import { ForloopComponent } from './forloop/forloop.component';
import { ChaComponent } from './cha/cha.component';
import { ConComponent } from './con/con.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WarningComponent, SuccessComponent, BindingComponent, ForloopComponent, ChaComponent, ConComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
