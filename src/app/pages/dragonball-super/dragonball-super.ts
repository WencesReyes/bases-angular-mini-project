import { Component, signal } from '@angular/core';
import type { Character } from '../../models/character';
import type { CharacterForm } from '../../models/character-form';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-super.html',
})
export class DragonballSuper {
  protected characterForm = signal<CharacterForm>({
    name: '',
    power: 0,
  });

  protected characters = signal<Character[]>([{ id: 3, name: 'Gohan', power: 8000 }]);

  updateName(newName: string) {
    this.characterForm.update((state) => ({ ...state, name: newName }));
  }

  updatePower(newPower: number) {
    this.characterForm.update((state) => ({ ...state, power: newPower }));
  }

  addCharacter() {
    if (!!this.characterForm().name && this.characterForm().power > 0) {
      const newCharacter: Character = {
        id: new Date().getTime(),
        name: this.characterForm().name,
        power: this.characterForm().power,
      };
      this.characters.update((state) => [...state, newCharacter]);
      this.resetForm();
    }
  }

  resetForm() {
    this.characterForm.set({
      name: '',
      power: 0,
    });
  }
}
