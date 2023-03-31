import Zombie from '../Zombie';

const res = {
  name: 'Zom',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Test class', () => {
  const z1 = new Zombie('Zom');
  expect(z1).toEqual(res);
});
