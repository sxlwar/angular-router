import { Injectable } from '@angular/core';

export interface Coder {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoderService {
  private data: Coder[] = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Lucy' },
    { id: 3, name: 'Tomas' },
    { id: 4, name: 'John' },
    { id: 5, name: 'Mike' },
    { id: 6, name: 'Kobe' }
  ];

  getCoders(): Coder[] {
    return this.data;
  }

  getCoder(id: number | string): Coder {
    return this.data.find(item => item.id === +id);
  }
}
