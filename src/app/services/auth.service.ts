import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loggedInSubject$ = new BehaviorSubject(false);
  public loggedIn$ = this.loggedInSubject$.asObservable();

  constructor() {}

  public toggleLogin(): void {
    this.loggedInSubject$.next(!this.loggedInSubject$.getValue());
  }
}
