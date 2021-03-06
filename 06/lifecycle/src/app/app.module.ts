import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MainLifecycleComponent } from './main-lifecycle/main-lifecycle.component';
import { LifeCycleChildComponent } from './main-lifecycle/life-cycle-child/life-cycle-child.component';
import { ChildChildComponent  } from './main-lifecycle/life-cycle-child/child-child/child-child.component';
import { CheckComponent } from './check/check.component';
import { CheckChildComponent } from './check/check-child/check-child.component';

@NgModule({
  declarations: [AppComponent, MainLifecycleComponent, LifeCycleChildComponent, ChildChildComponent, CheckComponent, CheckChildComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
