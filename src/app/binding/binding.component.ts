import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: ["./binding.component.css"]
})
export class BindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  enable: boolean = false;
  username: string = null;
  onInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    if (this.username != null) {
      this.enable = false; 
      this.username = (<HTMLInputElement>event.target).value;
    }
  }

  onClick() {
    this.username = (<HTMLInputElement>event.target).value;
  }
}
