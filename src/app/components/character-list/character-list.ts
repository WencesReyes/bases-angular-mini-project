import { Component, input } from '@angular/core';
import type { Character } from '../../models/character';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
