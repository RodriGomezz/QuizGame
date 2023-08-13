import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'https://quizgame-backend.onrender.com/';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  quizGenerator(selectedValue: any) {
    return this.http.put(URL + 'quizGenerator', selectedValue);
  }
}
