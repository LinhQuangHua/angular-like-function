import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-warning",
  templateUrl: "./warning.component.html",
  styleUrls: ["./warning.component.css"]
})
export class WarningComponent {
  
  notify_warning() {
    window.alert("This is manual component!");
  }
}
