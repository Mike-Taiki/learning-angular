import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {

  constructor() {
    console.log("   CheckChild: constructor");
  }

  ngOnInit() {
    console.log("   CheckChild: ngOnInit");
  }

  ngOnChanges() {
    console.log("   CheckChild: ngOnChanges");
  }

  ngDoCheck() {
    console.log("   CheckChild: ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("   CheckChild: ngAfterContentInit");
  }

  ngAferContentChecked() {
    console.log("   CheckChild: ngAferContentChecked");
  }

  ngAfterViewInit() {
    console.log("   CheckChild: ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("   CheckChild: ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("   CheckChild: ngOnDestroy");
  }

}
