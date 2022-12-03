import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

import { faBars,faScrewdriverWrench,faImages,faHouse,faAddressCard } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  faBars= faBars;
  faScrewdriver=faScrewdriverWrench
  faImages=faImages
  faHouse=faHouse
  faAdress=faAddressCard

  @ViewChild(MatSidenav, { static: true }) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver){}

  ngOnInit(): void {

    this.observer.observe(['(max-width: 991px)']).subscribe(
      (state: BreakpointState) => {
        if (state.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          console.log('moins de 800px')
        }else{
            this.sidenav.mode = 'side';
            this.sidenav.open();
          console.log('plus de 800px')
        }
      }
    )
  }

}
