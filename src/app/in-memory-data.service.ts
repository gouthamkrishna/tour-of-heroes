import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Kenshin' },
      { id: 12, name: 'Naruto' },
      { id: 13, name: 'Luffy' },
      { id: 14, name: 'Goku' },
      { id: 15, name: 'Ichigo' },
      { id: 16, name: 'Natsu' },
      { id: 17, name: 'Kenichi' },
      { id: 18, name: 'Edward' },
      { id: 19, name: 'L' },
      { id: 20, name: 'Meliodas' }
    ];
    return { heroes };
  }
}
