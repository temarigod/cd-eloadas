import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MouseTrackerService } from 'src/app/services/mouse-tracker.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent implements OnInit {
  @HostBinding('class.red')
  public mouseIsOnTheLeftUpperCorner!: boolean;

  constructor(
    public readonly authService: AuthService,
    public readonly mouseTrackerService: MouseTrackerService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.mouseTrackerService.mouseUpperLeftCorner$.subscribe((value) => {
      this.mouseIsOnTheLeftUpperCorner = value;
      this.cdr.markForCheck();
    });
  }
}
