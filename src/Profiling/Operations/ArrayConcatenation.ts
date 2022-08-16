import { IChartInfo } from "../ChartsInfo";
import { createdArrays } from "../Constants/arrays";
import { profile } from "../Profile";

export const ArrayConcatenation: IChartInfo = {
	label: "Array concatenation",
	result: {},
};

(Object.keys(createdArrays) as string[]).forEach((key) => {
	ArrayConcatenation.result[key] = [
		{
			name: "append elements using reduce()",
			result: (() => {
				const a = [...createdArrays[key]];
				const b = [...createdArrays[key]];
				return profile(() => {
					a.reduce((r, i) => {
						r.push(i);
						return r;
					}, b);
				});
			})(),
		},
		{
			name: "array's concat() method",
			result: (() => {
				const a = [...createdArrays[key]];
				const b = [...createdArrays[key]];
				return profile(() => {
					a.concat(b);
				});
			})(),
		},
		{
			name: "prepend elements using array spread syntax",
			result: (() => {
				const a = [...createdArrays[key]];
				const b = [...createdArrays[key]];
				return profile(() => [...a, ...b]);
			})(),
		},
		{
			name: "append elements in a for loop",
			result: (() => {
				console.log(createdArrays[key].length);
				const a = [...createdArrays[key]];
				const b = [...createdArrays[key]];
				return profile(() => {
					for (let i = 0; i < b.length; i++) {
						a.push(b[i]);
					}
					return a;
				});
			})(),
		},
	];
});
