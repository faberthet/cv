import { Component, OnInit } from '@angular/core';
import { faCircleCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.css']
})
export class AutresComponent implements OnInit {
  faCircleCheck= faCircleCheck;
  faSquareCheck=faSquareCheck

  constructor() { }

  ngOnInit(): void {
  }

}
