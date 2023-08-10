// importamos la funcion que vamos a testear
import { login } from '../src/lib/index';

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
    },
    writable: true,
  });
});

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
