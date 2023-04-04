import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/rest';


@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent {
  characterId: number = 0;
  sheet: any = {};

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterId = +params['id'];
      this.characterService.getSingleCharacter(this.characterId.toString()).subscribe(
        sheet => this.sheet = sheet);
    });
  }
}
//