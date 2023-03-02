import { favList } from ".";

describe('favList', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    test('should save and retrieve a list of numbers from localStorage', () => {
      const list = [1, 2, 3];
      favList.set(list);
      const result = favList.get();
      expect(result).toEqual(list);
    });
  
    test('should return an empty list if localStorage does not contain a list', () => {
      const result = favList.get();
      expect(result).toEqual([]);
    });
  });