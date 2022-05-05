import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MouseTrackerService } from './services/mouse-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements DoCheck, OnInit {
  @ViewChild('cdCounter', {
    static: true,
  })
  cdCounterElement!: ElementRef<HTMLDivElement>;
  title = 'cd-eloadas';

  cdCounter: number = 0;

  constructor(private readonly mouseTrackerService: MouseTrackerService) {}

  public ngOnInit(): void {
    this.mouseTrackerService.start();
  }

  public ngDoCheck(): void {
    this.cdCounter++;
    this.cdCounterElement.nativeElement.innerText = this.cdCounter.toString();
  }
}
