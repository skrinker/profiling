import { IChartInfo } from "../ChartsInfo";
import { createdArrays } from "../Constants/arrays";
import { profile } from "../Profile";

export const For: IChartInfo = {
	label: "For",
	result: {},
};

(Object.keys(createdArrays) as string[]).forEach((key) => {
	For.result[key] = [
		{
			name: "usual for",
			result: (() => {
				const a = [...createdArrays[key]];
				return profile(() => {
					let sum = 0;
					for (let i = 0; i < a.length; i++) {
						sum = sum + a[i];
					}
					return sum;
				});
			})(),
		},
		{
			name: "forEach",
			result: (() => {
				const a = [...createdArrays[key]];
				return profile(() => {
					let sum = 0;
					a.forEach((val) => (sum = sum + val));
					return sum;
				});
			})(),
		},
		{
			name: "map without return",
			result: (() => {
				const a = [...createdArrays[key]];
				return profile(() => {
					let sum = 0;
					a.map((val) => {
						sum = sum + val;
					});
					return sum;
				});
			})(),
		},
		{
			name: "reduce",
			result: (() => {
				const a = [...createdArrays[key]];
				return profile(() => a.reduce((prev, cur) => prev + cur));
			})(),
		},
	];
});
