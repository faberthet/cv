import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faAngular,faJava,faJs,faCss3 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  @Input() project: Project = new Project;

  faCirclePlus= faCirclePlus
  faAngular= faAngular
  faJava=faJava
  faJs=faJs
  faCss=faCss3

  showInfo: boolean=false;

  toggleInfo(){
    this.showInfo=!this.showInfo
  }

  constructor() { }

  ngOnInit(): void {
  }

}
