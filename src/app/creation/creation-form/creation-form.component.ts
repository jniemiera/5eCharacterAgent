import { Component } from '@angular/core';
import { CharacterSheet } from 'src/app/rest';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent {
  characterSheet: CharacterSheet = {
    "name" : '',
    "race" : '',
    "class" : '',
    "level" : 1
  }

  onNameInput(event: Event) {
    let eventTarget = event.target as HTMLInputElement;
    let value = eventTarget.value;
    this.characterSheet.name = value;
  }

  onRaceInput(event: Event) {
    let eventTarget = event.target as HTMLInputElement;
    let value = eventTarget.value;
    this.characterSheet.race = value;
  }

  onClassInput(event: Event) {
    let eventTarget = event.target as HTMLInputElement;
    let value = eventTarget.value;
    this.characterSheet.class = value;
  }

  onLevelChange(event: Event) {
    let eventTarget = event.target as HTMLInputElement;
    let value = eventTarget.value;
    this.characterSheet.level = parseInt(value);
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    console.log(this.characterSheet);
  }
}
