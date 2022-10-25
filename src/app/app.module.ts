import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { ListButtonAssignmentComponent } from './list-button-assignment/list-button-assignment.component';
import { HttpEmployeeService } from './http-employee.service';
import { HttpClientModule } from "@angular/common/http";
import { ComsumeFileComponent } from './comsume-file/comsume-file.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructuralDirectiveComponent,
    ChildComponentComponent,
    EmployeeListComponent,
    ListButtonAssignmentComponent,
    ComsumeFileComponent,
    InsertComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService, HttpEmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
