import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
