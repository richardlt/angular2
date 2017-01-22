import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Item } from './../../models/item.model'

import { ItemsService } from './../../services/items.service'

@Component({
  selector: 'exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {
  items: Observable<Item[]>;

  constructor(private itemsService: ItemsService) { }

  getItems() {
    this.items = this.itemsService.getItems();
  }

  ngOnInit() {
    this.getItems();
  }
}