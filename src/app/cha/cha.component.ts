import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.css']
})
export class ChaComponent implements OnInit {

  @Input() item: string;
  constructor() { }

  ngOnInit() {
  }

}