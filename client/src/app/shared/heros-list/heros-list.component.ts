import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Hero } from "../../models/hero";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.scss']
})
export class HerosListComponent {

  @Output() public hero = new EventEmitter<Hero>();

  @Input() public heros: Hero[] = [];

  @Output() public remove = new EventEmitter<Hero>();

}
