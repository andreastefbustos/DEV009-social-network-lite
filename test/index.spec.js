// importamos la funcion que vamos a testear
import { login, logout, register } from '../src/lib/index';

beforeEach(() => {
  const users = [
    { email: 'test@example.com', password: '123456' },
    // ... otros usuarios si los necesitas
  ];

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn((key) => {
        if (key === 'users') {
          return JSON.stringify(users);
        }
        return null;
      }),
      setItem: jest.fn(),
      removeItem: jest.fn(), // para el logout
      clear: jest.fn(),
    },
    writable: true,
  });
});

// TEST para la funcion de login
describe('Login function', () => {
  it('should return true for valid credentials', () => {
    const result = login('test@example.com', '123456');

    expect(result).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify({ email: 'test@example.com', password: '123456' }));
  });

  it('should return undefined for invalid credentials', () => {
    const result = login('test@example.com', 'wrongpassword');
    expect(result).toBeUndefined();
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('should return false when there are no users', () => {
  // simula que no hay usuarios en localStorage
    localStorage.getItem.mockReturnValueOnce(null);

    const result = login('anyemail@example.com', 'anypassword');

    expect(result).toBe(false);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});

// TEST para la funcion logout
describe('Logout function', () => {
  it('should remove user from localStorage', () => {
    // Llamas a la función que quieres testear
    logout();

    // Verificas que removeItem haya sido llamado con el argumento correcto
    expect(localStorage.removeItem).toHaveBeenCalledWith('user');
  });
});

// TEST para la funcion register
describe('Register function', () => {
  it('should register a new user successfully', () => {
    localStorage.getItem.mockReturnValueOnce(null); // No hay usuarios previamente registrados
    const result = register('test@example.com', 'password123');
    expect(result).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('users', JSON.stringify([{ email: 'test@example.com', password: 'password123' }]));
  });

  it('should throw an error with an invalid email', () => {
    expect(() => {
      register('notanemail', 'password123');
    }).toThrow('Invalid email');
  });

  it('should throw an error with a short password', () => {
    expect(() => {
      register('test@example.com', 'pass');
    }).toThrow('Password must be at least 6 characters long');
  });

  it('should throw an error if user already exists', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ email: 'test@example.com', password: 'password123' }]));
    expect(() => {
      register('test@example.com', 'password1234');
    }).toThrow('User already exists');
  });
});
