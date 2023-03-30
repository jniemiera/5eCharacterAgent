import { Component, Input } from '@angular/core';

interface elementInterface {
  id: number,
  name: string,
  class: string,
  race: string,
  level: number
}

@Component({
  selector: 'app-collection-element',
  templateUrl: './collection-element.component.html',
  styleUrls: ['./collection-element.component.css']
})

export class CollectionElementComponent {
  @Input() element: elementInterface = {
    "id": 0,
    "name": "Adam Nobody",
    "class": "barbarian",
    "race": "human",
    "level": 1
  };
}
