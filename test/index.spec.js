// importamos la funcion que vamos a testear
import { login, register } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

describe('Function', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
});
