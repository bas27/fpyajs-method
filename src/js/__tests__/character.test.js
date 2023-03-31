import Character from '../Character';

const res = {
  name: 'Bo',
  type: 'Undead',
  health: 100,
  level: 2,
  attack: 24,
  defence: 24,
};

describe('Tests class Character', () => {
  it('create object Character', () => {
    const jon = new Character('Jon', 'Undead', 23, 23);
    const res = {
      name: 'Jon',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 23,
      defence: 23,
    };

    expect(jon).toEqual(res);
  });

  it('create object Character with unsupported type', () => {
    try {
      const jon = new Character('Jon', 'Wolf', 23, 23);
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('This type does not exist');
    }
  });

  it('create object Character with length name error', () => {
    try {
      const jon = new Character('J', 'Bowman', 23, 23);
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Length name error');
    }
  });

  it('create object Character with name is not string', () => {
    try {
      const jon = new Character(999, 'Wolf', 23, 23);
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Name is not string');
    }
  });

  it('Testing level up character', () => {
    const person = new Character('Bo', 'Undead', 20, 20, 80);
    person.levelUp();
    const res = {
      name: 'Bo',
      type: 'Undead',
      health: 100,
      level: 2,
      attack: 24,
      defence: 24,
    };
    expect(person).toEqual(res);
  });

  it('Testing cannot level up', () => {
    try {
      const person = new Character('Bo', 'Undead', 20, 20, 0);
      person.levelUp();
      const res = {
        name: 'Bo',
        type: 'Undead',
        health: 100,
        level: 2,
        attack: 24,
        defence: 24,
		  };
      expect(person).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Cannot level up a dead character');
    }
  });

  it('Testing damage', () => {
    const person = new Character('Bo', 'Undead', 20, 20, 100);
    person.damage(10);
    const res = {
      name: 'Bo',
      type: 'Undead',
      health: 92,
      level: 1,
      attack: 20,
      defence: 20,
    };
    expect(person).toEqual(res);
  });

  it('Testing damage with health 0', () => {
    try {
      const person = new Character('Bo', 'Undead', 20, 20, 0);
      person.damage(10);
      const res = {
        name: 'Bo',
        type: 'Undead',
        health: -8,
        level: 1,
        attack: 20,
        defence: 20,
      };
      expect(person).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Cannot damage');
    }
  });
});
