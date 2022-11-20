import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/data/portfolioData';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projects:Project[]=Projects
  constructor() { }

  ngOnInit(): void {
  }

}
