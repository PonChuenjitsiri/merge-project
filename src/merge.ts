/**
 * @param collection_1 
 * @param collection_2 
 * @param collection_3 
 * @returns 
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  
  const result: number[] = [];
  const len1 = collection_1.length;
  const len2 = collection_2.length;

  let p1 = 0; 
  let p2 = 0; 
  
  let p3 = collection_3.length - 1; 

  while (p1 < len1 || p2 < len2 || p3 >= 0) {
    
    
    const val1 = (p1 < len1) ? collection_1[p1] : Infinity;
    const val2 = (p2 < len2) ? collection_2[p2] : Infinity;
    const val3 = (p3 >= 0) ? collection_3[p3] : Infinity;

    if (val1 === Infinity && val2 === Infinity && val3 === Infinity) {
      break;
    }
    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      p1++; 
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      p2++; 
    } else if (val3 <= val1 && val3 <= val2) {
      result.push(val3);
      p3--;
    }
  }

  return result;
}

if (require.main === module) {
  console.log("Running merge function example...");

  const col1 = [1, 5, 9, 100];
  const col2 = [2, 3, 10];
  const col3 = [15, 8, 4, -5]; 

  console.log("Collection 1 (Asc):", col1);
  console.log("Collection 2 (Asc):", col2);
  console.log("Collection 3 (Desc):", col3);

  const merged = merge(col1, col2, col3);

  console.log("Merged Array (Asc):", merged);
}

