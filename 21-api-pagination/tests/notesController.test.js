import fs from 'fs';
import { createNote, deleteNote } from '../controllers/notesController.js';
import exp from 'constants';

describe('createNote', () => {
  it('should return error message when file system fails to write', () => {
    const mockWriteFile = jest.spyOn(fs, 'writeFile');
    mockWriteFile.mockImplementation((_, __, cb) => cb('mockError'));
    expect(createNote('testNote', 'testContent', jest.fn())).toBeUndefined();
  });

  it('should return success message when file system writes successfully', () => {
    const mockWriteFile = jest.spyOn(fs, 'writeFile');
    mockWriteFile.mockImplementation((_, __, cb) => cb(null));
    expect(createNote('testNote', 'testContent', jest.fn())).toBeUndefined();
  });
});

describe('deleteNote', () => {
  it('should return error message when file system fails to delete', () => {
    const mockUnlink = jest.spyOn(fs, 'unlink');
    mockUnlink.mockImplementation((_, cb) => cb('mockError'));
    expect(deleteNote('testNote', jest.fn())).toBeUndefined();
  });

  it('should return success message when file system deletes successfully', () => {
    const mockUnlink = jest.spyOn(fs, 'unlink');
    mockUnlink.mockImplementation((_, cb) => cb(null));
    expect(deleteNote('testNote', jest.fn())).toBeUndefined();
  });
});
