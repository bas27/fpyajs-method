import Magician from '../Magician';

const res = {
  name: 'Mag',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('Test class Magician', () => {
  const m1 = new Magician('Mag');
  expect(m1).toEqual(res);
});
