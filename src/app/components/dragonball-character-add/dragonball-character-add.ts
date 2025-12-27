import { Component, output, signal } from '@angular/core';
import type { CharacterForm } from '../../models/character-form';
import type { Character } from '../../models/character';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
  styleUrl: './dragonball-character-add.css',
})
export class DragonballCharacterAdd {
  protected characterForm = signal<CharacterForm>({
    name: '',
    power: 0,
  });

  characterAdded = output<Character>();

  addCharacter() {
    if (!!this.characterForm().name && this.characterForm().power > 0) {
      const newCharacter: Character = {
        id: new Date().getTime(),
        name: this.characterForm().name,
        power: this.characterForm().power,
      };

      this.characterAdded.emit(newCharacter);

      this.resetForm();
    }
  }

  updateName(newName: string) {
    this.characterForm.update((state) => ({ ...state, name: newName }));
  }

  updatePower(newPower: number) {
    this.characterForm.update((state) => ({ ...state, power: newPower }));
  }

  resetForm() {
    this.characterForm.set({
      name: '',
      power: 0,
    });
  }
}
