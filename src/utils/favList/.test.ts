import { favList } from ".";

describe('favList', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    test('Should save and get a list of numbers IDS from localStorage.', () => {
      const list = [1, 2, 3];
      favList.set(list);
      const result = favList.get();
      expect(result).toEqual(list);
    });
  
    test('Should return an empty list if localStorage does not contain a list.', () => {
      const result = favList.get();
      expect(result).toEqual([]);
    });
  });