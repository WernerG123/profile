import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navToProjects() {
    this.router.navigate(['/projects']);
  }

  navToProfile() {
    this.router.navigate(['/']);
  }

}
