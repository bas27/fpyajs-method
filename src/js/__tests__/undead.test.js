import Undead from '../Undead';

const res = {
  name: 'Un',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('Test class', () => {
  const u1 = new Undead('Un');
  expect(u1).toEqual(res);
});
