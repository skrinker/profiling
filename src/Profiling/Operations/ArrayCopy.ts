import { IChartInfo } from "../ChartsInfo";
import { createdArrays } from "../Constants/arrays";
import { profile } from "../Profile";

export const ArrayCopy: IChartInfo = {
	label: "Array copy",
	result: {},
};

(Object.keys(createdArrays) as string[]).forEach((key) => {
	ArrayCopy.result[key] = [
		{
			name: "array's slice() method",
			result: (() => {
				const a = [...createdArrays[key]];
				return profile(() => {
					return a.slice();
				});
			})(),
		},
		{
			name: "concatenate empty array literal",
			result: (() => {
				const a = [...createdArrays[key]];
				return profile(() => {
					return a.concat([]);
				});
			})(),
		},
		{
			name: "spread syntax",
			result: (() => {
				const a = [...createdArrays[key]];
				return profile(() => {
					return [...a];
				});
			})(),
		},
		{
			name: "array from",
			result: (() => {
				const a = [...createdArrays[key]];
				return profile(() => {
					return Array.from(a);
				});
			})(),
		},
	];
});
