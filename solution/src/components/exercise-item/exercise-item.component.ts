import { Component, Input } from '@angular/core';

@Component({
  selector: 'exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss']
})
export class ExerciseItemComponent {
  @Input()
  private name: string;
  @Input()
  private value: string;

  constructor() { }
}