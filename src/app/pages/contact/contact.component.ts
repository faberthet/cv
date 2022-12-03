import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot,faEnvelope as fd, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faGithub=faGithub
  faLinkedin= faLinkedin

  faLocation=faLocationDot
  faEnvelope=fd
  faPhone=faPhone

  constructor() { }

  ngOnInit(): void {
  }

}
