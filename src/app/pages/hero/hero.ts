import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero {
  protected name = signal('Ironman');
  protected age = signal(45);

  protected heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  protected changeAge() {
    this.age.set(60);
  }

  protected changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  protected resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
