// importamos la funcion que vamos a testear
import {
  login, logout, register, getLoggedInUser, createPost, getPosts, editPost,
} from '../src/lib/index';

// Mock de localStorage
beforeEach(() => {
  const users = [
    { email: 'test@example.com', password: '123456' },
  ];

  const loggedInUser = { email: 'test@example.com', password: '123456' };

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn((key) => {
        switch (key) {
          case 'users':
            return JSON.stringify(users);
          case 'user':
            return JSON.stringify(loggedInUser);
          default:
            return null;
        }
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
  it('Should return true for valid credentials', () => {
    const result = login('test@example.com', '123456');

    expect(result).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify({ email: 'test@example.com', password: '123456' }));
  });

  it('Should return undefined for invalid credentials', () => {
    const result = login('test@example.com', 'wrongpassword');
    expect(result).toBeUndefined();
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('Should return false when there are no users', () => {
  // simula que no hay usuarios en localStorage
    localStorage.getItem.mockReturnValueOnce(null);

    const result = login('anyemail@example.com', 'anypassword');

    expect(result).toBe(false);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});

// TEST para la funcion logout
describe('Logout function', () => {
  it('Should remove user from localStorage', () => {
    // Se llama a la función que se quiere testear
    logout();

    // Se verifica que removeItem haya sido llamado con el argumento correcto
    expect(localStorage.removeItem).toHaveBeenCalledWith('user');
  });
});

// TEST para la funcion register
describe('Register function', () => {
  it('Should register a new user successfully', () => {
    localStorage.getItem.mockReturnValueOnce(null); // No hay usuarios previamente registrados
    const result = register('test@example.com', 'password123');
    expect(result).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('users', JSON.stringify([{ email: 'test@example.com', password: 'password123' }]));
  });

  it('Should throw an error with an invalid email', () => {
    expect(() => {
      register('notanemail', 'password123');
    }).toThrow('Invalid email');
  });

  it('Should throw an error with a short password', () => {
    expect(() => {
      register('test@example.com', 'pass');
    }).toThrow('Password must be at least 6 characters long');
  });

  it('Should throw an error if user already exists', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ email: 'test@example.com', password: 'password123' }]));
    expect(() => {
      register('test@example.com', 'password1234');
    }).toThrow('User already exists');
  });
});

// TEST para la funcion getLoggedInUser
describe('getLoggedInUser function', () => {
  it('Should return the logged-in user if it exists', () => {
    const result = getLoggedInUser();
    expect(result).toEqual({ email: 'test@example.com', password: '123456' });
  });

  it('Should return null if no user is logged in', () => {
    window.localStorage.getItem.mockReturnValueOnce(null);
    const result = getLoggedInUser();
    expect(result).toBeNull();
  });
});

// TEST para la funcion createPost
describe('createPost function', () => {
  it('Should create a post successfully', () => {
    const id = createPost('This is a valid content', 'test@example.com');
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
    expect(localStorage.setItem).toHaveBeenCalledWith('posts', JSON.stringify([{ id, content: 'This is a valid content', email: 'test@example.com' }]));
  });

  it('Should trow an error woth too short content', () => {
    expect(() => {
      createPost('', 'test@example.com');
    }).toThrow('Content must be at least 1 character long');
  });

  it('Should throw an error with an invalid email', () => {
    expect(() => {
      createPost('This is a valid content', 'notanemail');
    }).toThrow('Invalid email');
  });

  it('Should save posts to localStorage', () => {
    const previosPosts = [{
      id: 'someID',
      content: 'Previous content',
      email: 'previous@example.com',
    }];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(previosPosts));

    const id = createPost('Another valid content', 'test@example.com');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'posts',
      JSON.stringify([...previosPosts, { id, content: 'Another valid content', email: 'test@example.com' }]),
    );
  });
});

// TEST para la funcion getPosts
describe('getPosts function', () => {
  it('Should return an empty array if there are no posts in localStorage', () => {
    // Mock para simular que no hay posts en localStorage
    localStorage.getItem.mockReturnValueOnce(null);

    const result = getPosts();
    expect(result).toEqual([]);
  });

  it('Should return an array of posts if they exist in localStorage', () => {
    const mockPosts = [
      { id: 'post1', content: 'Test content 1', email: 'test1@example.com' },
      { id: 'post2', content: 'Test content 2', email: 'test2@example.com' },
    ];

    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockPosts));

    const result = getPosts();
    expect(result).toEqual(mockPosts);
  });
});

// TEST para la funcion editPost
describe('editPost function', () => {
  it('Should throw an error with too short content', () => {
    expect(() => {
      editPost('someID', '');
    }).toThrow('Content must be at least 1 character long');
  });

  it('Should throw an error if there are no post in localStorage', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    expect(() => {
      editPost('someID', 'Valid content');
    }).toThrow('Post does not exist');
  });

  it('Should throw an error if the post to edit does not exist', () => {
    const mockPosts = [
      { id: 'post1', content: 'Test content 1', email: 'test1@example.com' },
      { id: 'post2', content: 'Test content 2', email: 'test2@example.com' },
    ];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockPosts));

    expect(() => {
      editPost('nonExistentID', 'Valid content');
    }).toThrow('Post does not exist');
  });

  it('Should edit the post content correctly', () => {
    const mockPosts = [
      { id: 'post1', content: 'Test content 1', email: 'test1@example.com' },
      { id: 'post2', content: 'Test content 2', email: 'test2@example.com' },
    ];
    const updatedContent = 'Updated content for post1';
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockPosts));

    editPost('post1', updatedContent);

    const updatedPosts = [
      { id: 'post1', content: updatedContent, email: 'test1@example.com' },
      { id: 'post2', content: 'Test content 2', email: 'test2@example.com' },
    ];
    expect(localStorage.setItem).toHaveBeenCalledWith('posts', JSON.stringify(updatedPosts));
  });
});
// TEST para la funcion deletePost
