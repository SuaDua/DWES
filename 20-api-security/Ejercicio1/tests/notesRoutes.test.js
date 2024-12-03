import { handleRoutes } from '../routes/notesRoutes.js';

describe('handleRoutes', () => {
  let mockRl;
  let mockCallback;

  beforeEach(() => {
    mockRl = {
      question: jest.fn((_, cb) => cb('mockInput')),
      close: jest.fn(),
    };
    mockCallback = jest.fn();
  });

  it('should call createNote when option is 1', () => {
    handleRoutes('1', mockRl, mockCallback);
    expect(mockRl.question).toHaveBeenCalledTimes(2);
  });

  it('should call deleteNote when option is 2', () => {
    handleRoutes('2', mockRl, mockCallback);
    expect(mockRl.question).toHaveBeenCalledTimes(1);
  });

  it('should close readline when option is 3', () => {
    handleRoutes('3', mockRl, mockCallback);
    expect(mockRl.close).toHaveBeenCalled();
  });

  it('should call callback with error message for invalid option', () => {
    handleRoutes('invalid', mockRl, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith('Opción no válida. Inténtalo de nuevo.');
  });
});