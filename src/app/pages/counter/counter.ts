import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.html',
  styles: `
    button {
      margin-right: 5px;
      padding: 5px 10px;
      font-size: 0.7rem;
      width: 100px;
    }
  `,
})
export class Counter {
  protected readonly count = signal(0);

  increaseBy(value: number) {
    this.count.update((current) => current + value);
  }

  reset() {
    this.count.set(0);
  }
}
