import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MouseTrackerService {
  private onTheLeftUpperSideSubject$ = new BehaviorSubject(false);

  public mouseUpperLeftCorner$ = this.onTheLeftUpperSideSubject$.asObservable();

  constructor(private readonly ngZone: NgZone) {}

  public start() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent<MouseEvent>(document.body, 'mousemove', {
        capture: true,
      }).subscribe((e) => {
        let oldValue = this.onTheLeftUpperSideSubject$.getValue();
        const newValue = e.clientX < 100 && e.clientY < 100;
        if (newValue !== oldValue) {
          this.ngZone.run(() => {
            this.onTheLeftUpperSideSubject$.next(newValue);
          });
        }
      });
    });
  }
}
