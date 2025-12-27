import { Injectable, signal, effect } from '@angular/core';
import type { Character } from '../models/character';

const isCharacterArray = (characters: any): characters is Character[] => {
  return (
    Array.isArray(characters) &&
    characters.every(
      (character) =>
        typeof character?.id === 'number' &&
        typeof character?.name === 'string' &&
        typeof character?.power === 'number',
    )
  );
};

const getCharactersFromLocalStorage = (): Character[] => {
  const charactersLocalStorage = localStorage.getItem('characters');
  const characters = charactersLocalStorage ? JSON.parse(charactersLocalStorage) : [];

  if (isCharacterArray(characters)) {
    return characters;
  }

  return [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  private characters = signal<Character[]>(getCharactersFromLocalStorage());

  characterList = this.characters.asReadonly();

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((state) => [...state, newCharacter]);
  }
}
