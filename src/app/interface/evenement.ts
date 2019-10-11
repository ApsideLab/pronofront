import { Evenement } from '../Models/evenement';
import 'jasmine';

describe('Evenement', () => {
  it('should create an instance', () => {
    expect(new Evenement()).toBeTruthy();
  });
});
