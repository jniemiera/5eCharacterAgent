import { Component } from '@angular/core';
import { CharacterService, CharacterSheet } from 'src/app/rest';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent {

  title: string = "";
  characterId: number = 0;
  sheet: any = {};


  characterSheet: CharacterSheet = {
    "name" : '',
    "race" : '',
    "class" : '',
    "level" : 1
  }

  characterSheetForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    class: new FormControl('', [Validators.required]),
    level: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(20)]),
  });

  constructor(private characterService: CharacterService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterId = +params['id'];
      if(this.characterId === 0) {
        this.title = "Create Character";
      } else {
        this.title = "Update Character";
        this.characterService.getSingleCharacter(this.characterId.toString()).subscribe(sheet => {
            this.sheet = sheet;
            this.fillInputAreas(sheet);
          });
      }
    });
  }

  fillInputAreas(sheet: any) {
    if (sheet.hasOwnProperty('name')) {
      this.characterSheet.name = sheet.name;
    }
    if (sheet.hasOwnProperty('race')) {
      this.characterSheet.race = sheet.race;
    }
    if (sheet.hasOwnProperty('class')) {
      this.characterSheet.class = sheet.class;
    }
    if (sheet.hasOwnProperty('level')) {
      this.characterSheet.level = sheet.level;
    }
    this.characterSheetForm.get('name')?.setValue(this.characterSheet.name);
    this.characterSheetForm.get('race')?.setValue(this.characterSheet.race);
    this.characterSheetForm.get('class')?.setValue(this.characterSheet.class);
    this.characterSheetForm.get('level')?.setValue(this.characterSheet.level);
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
    if (this.characterId === 0) {
      this.characterService.addCharacter(this.characterSheet).subscribe();
    } else {
      console.log("update postaci");
      this.characterService.updateCharacter(this.characterId.toString(), this.characterSheet).subscribe();
    }
    this.router.navigate(['/collection']);
  }
}
