import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/rest/api/character.service';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})

export class CollectionHomeComponent implements OnInit{
  thumbs: any[] = [];

  constructor(private characterService: CharacterService) {}

  onItemDeleted(idToDelete: number) {
    this.thumbs = this.thumbs.filter(item => item.id != idToDelete);
  }

  ngOnInit(): void {
    this.characterService.searchCharacters(0, 20).subscribe(response => {
      this.thumbs = response;
    });
  }
}
