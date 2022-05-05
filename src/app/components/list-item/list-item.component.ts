import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListItemComponent implements OnInit {
  @Input() item!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
