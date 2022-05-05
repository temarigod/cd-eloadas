import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-list',
  templateUrl: './big-list.component.html',
  styleUrls: ['./big-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigListComponent implements OnInit {
  public items = Array.from({
    length: 10,
  }).map((_, index) => `${index}-item`);

  constructor() {}

  ngOnInit(): void {}
}
