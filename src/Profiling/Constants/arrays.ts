import { createRandomArray } from "./helpers";

interface IConstantArrays {
  [type: string]: number[];
}

export const createdArrays: IConstantArrays = {
  ARRAY_10: createRandomArray(10),
  ARRAY_50: createRandomArray(50),
  ARRAY_100: createRandomArray(100),
  ARRAY_1000: createRandomArray(1000),
  ARRAY_5000: createRandomArray(5000),
};
