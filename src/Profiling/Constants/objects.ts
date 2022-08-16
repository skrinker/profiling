import { createRandomObject } from "./helpers";

interface IConstantObjects {
	[type: string]: any;
}

export const createdObjects: IConstantObjects = {
	OBJECT_0_10: createRandomObject(0, 10),
	OBJECT_0_100: createRandomObject(0, 100),
	OBJECT_0_1000: createRandomObject(0, 1000),
	OBJECT_1_10: createRandomObject(1, 10),
	OBJECT_1_100: createRandomObject(1, 100),
	// OBJECT_1_1000: createRandomObject(1, 1000),
	OBJECT_2_10: createRandomObject(2, 10),
	// OBJECT_2_100: createRandomObject(2, 100),
	// OBJECT_2_1000: createRandomObject(2, 1000),
};
