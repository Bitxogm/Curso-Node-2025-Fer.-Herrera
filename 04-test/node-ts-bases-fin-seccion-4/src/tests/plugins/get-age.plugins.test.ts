import { getAge } from './../../plugins/get-age.plugin';

describe('Test in plugins/get-age.plugin', () => {
  test('getAge() should return the age of a person', () => {
    const birthdate = '1976-01-01';
    const age = getAge(birthdate);
    expect(age).toBe(49);
    expect(typeof age).toBe('number');
    expect(typeof birthdate).toBe('string');
  });

  test('getAge( should return the current age', () => {
    const birthdate = '1976-01-01';
    const age = getAge(birthdate);
    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculatedAge);
  });

  test('getAge should return 0 years', () => { 
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthdate = '1995-01-01';
    const age = getAge(birthdate);
    console.log({age});
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalledTimes(2);
   });
});