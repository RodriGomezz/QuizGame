import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  numbers: any = [];
  questions: any = [];
  quiz!: any;
  option: string[] = [];
  correctAnswers: any = 0;
  wrongAnswers: any = 0;
  answers: any;
  color: any = [];
  submitisdisabled = false;
  nextisdisabled = true;

  constructor(private router: Router) {
    this.quiz = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit() {
    for (let i = 0; i < Object.keys(this.quiz.questions).length; i++) {
      this.numbers.push(i);
    }
    for (let i = 0; i < Object.values(this.quiz.answers).length - 1; i++) {
      this.questions.push(i);
    }
  }

  submit() {
    for (let i = 0; i < Object.values(this.quiz.answers).length; i++) {
      if (this.option[i] === this.quiz.answers[i].correctAnswer) {
        this.correctAnswers += 1;
        this.color.push('green');
      } else {
        this.color.push('red');
        this.wrongAnswers += 1;
      }
      this.submitisdisabled = true;
      this.nextisdisabled = false;
    }
  }

  next() {
    this.router.navigate(['/result'], {
      state: { correct: this.correctAnswers, incorrect: this.wrongAnswers },
    });
  }
}
