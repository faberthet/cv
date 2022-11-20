import { Component, OnInit } from '@angular/core';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-interets',
  templateUrl: './interets.component.html',
  styleUrls: ['./interets.component.css']
})
export class InteretsComponent implements OnInit {
  faPersonRunning = faPersonRunning
  faGamepad = faGamepad
  faMasks = faMasksTheater
  faBook = faBook

  constructor() { }

  ngOnInit(): void {
  }

}
