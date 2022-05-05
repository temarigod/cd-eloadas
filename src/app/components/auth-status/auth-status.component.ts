import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-status',
  templateUrl: './auth-status.component.html',
  styleUrls: ['./auth-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthStatusComponent implements OnInit {

  constructor(public readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  public ngDoCheck(): void {
    console.log('AuthStatus');
  }
}
