import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/character-list/character-list';
import { DragonballCharacterAdd } from '../../components/dragonball-character-add/dragonball-character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball.html',
})
export class Dragonball {
  protected dragonballService = inject(DragonballService);
}
