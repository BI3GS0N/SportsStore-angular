import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';



@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    ModelModule,
    BrowserModule,
    FormsModule
  ],
  exports: [StoreComponent]
})
export class StoreModule { }
