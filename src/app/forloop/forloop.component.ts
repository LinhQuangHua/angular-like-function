import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forloop",
  templateUrl: "./forloop.component.html",
  styleUrls: ["./forloop.component.css"]
})
export class ForloopComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  display: boolean = false;
  secrect: string = "Secret Password = tuna";
  x: number = 2;
  logs: number[] = [1];
  ToggleDisplay() {
    this.display = true;
    this.secrect = "amazing";
    this.logs.push(this.x++);
  }
}
