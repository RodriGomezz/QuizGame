import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

interface Option {
  value: string;
  viewValue: String;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent {
  selectedValue = '';
  options: Option[] = [
    { value: 'football', viewValue: 'Football' },
    { value: 'generalKnowledge', viewValue: 'General Knowledge' },
    { value: 'geography', viewValue: 'Geography' },
  ];
  questions!: any;

  constructor(private quizService: QuizService, private router: Router) {}

  submit(selectedValue: string) {
    if (this.selectedValue != '') {
      this.quizService.quizGenerator(selectedValue).subscribe({
        next: (res) => {
          this.questions = res;
          this.router.navigate(['/quiz'], { state: this.questions });
        },
      });
    }
  }
}
