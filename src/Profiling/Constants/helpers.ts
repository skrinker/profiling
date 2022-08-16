interface IRandomObject {
	[key: string]: IRandomObject | number;
}

export const createRandomValue = (maxValue: number) =>
	Math.floor(Math.random() * maxValue);

export const createRandomArray = (length: number) => {
	const result: number[] = [];
	for (let i = 0; i < length; i++) {
		result.push(createRandomValue(100));
	}
	return result;
};

export const createRandomObject = (level: number, propsCount: number) => {
	const result: IRandomObject = {};
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	const createUniqueProp = () => {
		let name = characters[createRandomValue(characters.length - 1)];
		while (result[name] !== undefined) {
			name = name + characters[createRandomValue(characters.length - 1)];
		}
		return name;
	};

	for (let i = 0; i < propsCount; i++) {
		if (level === 0) {
			result[createUniqueProp()] = createRandomValue(100);
		} else {
			result[createUniqueProp()] = createRandomObject(
				level - 1,
				propsCount
			);
		}
	}

	return result;
};
