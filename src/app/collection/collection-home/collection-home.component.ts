import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/rest/api/character.service';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})

// public interface SheetThumbnail {
//   id: number,
//   name: string,
//   race: string,
//   class: string,
//   level: number
// }

export class CollectionHomeComponent implements OnInit{
  thumbs: any[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.searchCharacters(0, 20).subscribe(response => {
      this.thumbs = response;
    });
  }
}
