import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  result: any;
  constructor(private router: Router) {
    this.result = this.router.getCurrentNavigation()?.extras.state;
  }
}
