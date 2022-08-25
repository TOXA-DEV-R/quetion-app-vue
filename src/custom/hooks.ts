/** @format */

export function randomArray(array: any[]): any[] {
  let dataArray: any[] = array;

  let tmp: any = null;
  let current: number = 0;
  let top: number = array.length;
  const RANDOM_NUMBER: number = 0;

  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + RANDOM_NUMBER));
      tmp = dataArray[current];
      dataArray[current] = dataArray[top];
      dataArray[top] = tmp;
    }
  }

  return dataArray;
}

export function calcPercent(arry: any[], whatData: string): number {
  let total = 0;
  for (const key in arry) {
    if (arry[key][whatData]) {
      total += 1;
    }
  }
  return total;
}
