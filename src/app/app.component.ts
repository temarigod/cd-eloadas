import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements DoCheck {
  @ViewChild('cdCounter', {
    static: true,
  })
  cdCounterElement!: ElementRef<HTMLDivElement>;
  title = 'cd-eloadas';

  cdCounter: number = 0;

  public ngDoCheck(): void {
    this.cdCounter++;
    this.cdCounterElement.nativeElement.innerText = this.cdCounter.toString();
  }
}
