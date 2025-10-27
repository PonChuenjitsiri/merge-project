import { merge } from './merge';

describe('merge function', () => {

  test('should merge three standard arrays', () => {
    const col1 = [1, 5, 9];
    const col2 = [2, 3, 10];
    const col3 = [15, 8, 4];
    expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 4, 5, 8, 9, 10, 15]);
  });

  test('should handle empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 4], [])).toEqual([3, 4]);
    expect(merge([], [], [5, 0])).toEqual([0, 5]); 
  });

  test('should handle one of each', () => {
    expect(merge([1], [2], [3])).toEqual([1, 2, 3]); 
  });

  test('should handle uneven length arrays', () => {
    const col1 = [1, 10, 20, 30, 40];
    const col2 = [2];
    const col3 = [5, 3]; 
    expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 5, 10, 20, 30, 40]);
  });
  
  test('should handle duplicates across arrays', () => {
    const col1 = [1, 5, 5];
    const col2 = [2, 5];
    const col3 = [10, 5, 0];
    expect(merge(col1, col2, col3)).toEqual([0, 1, 2, 5, 5, 5, 5, 10]);
  });

  test('should handle negative numbers', () => {
    const col1 = [-5, -1, 10];
    const col2 = [-3];
    const col3 = [2, -4, -10]; 
    expect(merge(col1, col2, col3)).toEqual([-10, -5, -4, -3, -1, 2, 10]);
  });

});
