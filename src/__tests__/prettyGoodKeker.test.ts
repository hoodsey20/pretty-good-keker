import { prettyGoodKeker } from '../index';

describe('prettyGoodKeker', () => {
  it('Корректно кекает если переданы субъект и объект', () => {
    expect(prettyGoodKeker('Me', 'thing')).toBe('Me kek about thing');
  });
});
