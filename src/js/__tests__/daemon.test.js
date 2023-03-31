import Daemon from '../Daemon';

const res = {
  name: 'dai',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};
describe("tests daemon character", () => {
  it('Test class', () => {
    const d1 = new Daemon('dai');
    expect(d1).toEqual(res);
  });

});