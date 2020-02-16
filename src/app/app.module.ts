import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesService } from './services/courses.service';
import { CourseResolver } from './services/course.resolver';
import { CalculatorService } from './services/calculator.service';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [    
    CoursesService,
    CourseResolver,
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
