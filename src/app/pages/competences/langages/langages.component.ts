import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langages',
  templateUrl: './langages.component.html',
  styleUrls: ['./langages.component.css']
})
export class LangagesComponent implements OnInit {

  langages=[ 
    {id:1, value:"Java",xp:'100%'}, //xp en pourcentage de temps sur 2 ans
    {id:2, value:"Javascript",xp:'75%'},
    {id:3, value:"Typescript",xp:'53%'},
    {id:4, value:"CSS",xp:'100%'},
    {id:5, value:"SQL",xp:'100%'}
]
  frameworks=[ 
    {id:1, value:"Angular",xp:'53%'},
    {id:2, value:"Spring Boot",xp:'45%'},
    {id:3, value:"Angular material",xp:'45%'},
    {id:4, value:"Bootstrap",xp:'45%'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
