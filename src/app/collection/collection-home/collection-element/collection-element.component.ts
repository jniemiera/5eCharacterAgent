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
    "class": "Barbarian",
    "race": "Human",
    "level": 1
  };

  classImages: any[] = [
    {class: "Barbarian", path:"assets/barbarian_icon.jpeg"},
    {class: "Bard", path:"assets/bard_icon.jpeg"},
    {class: "Cleric", path:"assets/cleric_icon.jpeg"},
    {class: "Druid", path:"assets/druid_icon.jpeg"},
    {class: "Fighter", path:"assets/fighter_icon.jpeg"},
    {class: "Monk", path:"assets/monk_icon.jpeg"},
    {class: "Paladin", path:"assets/paladin_icon.jpeg"},
    {class: "Ranger", path:"assets/ranger_icon.jpeg"},
    {class: "Rogue", path:"assets/rogue_icon.jpeg"},
    {class: "Sorcerer", path:"assets/sorcerer_icon.jpeg"},
    {class: "Warlock", path:"assets/warlock_icon.jpeg"},
    {class: "Wizard", path:"assets/wizard_icon.jpeg"}
  ];

  getClassImage() {
    let characterClass: string = this.element.class;
    for (let image of this.classImages) {
      if(image.class === characterClass) {
        return image.path;
      }
    }
  }
}
