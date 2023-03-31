import Swordsman from '../Swordsman';

const res = {
  name: 'Sword',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Test class Swordsman', () => {
  const sword = new Swordsman('Sword');
  expect(sword).toEqual(res);
});
