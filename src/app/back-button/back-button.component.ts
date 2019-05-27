import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  @Input() path: string
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo() {
    this.router.navigateByUrl(this.path)
  }
}
