import { IChartInfo } from "../ChartsInfo";
import { createdArrays } from "../Constants/arrays";
import { createdObjects } from "../Constants/objects";
import { profile } from "../Profile";
import * as _ from "lodash";
export const DeepCopy: IChartInfo = {
	label: "Deep copy",
	result: {},
};

(Object.keys(createdObjects) as string[]).forEach((key) => {
	DeepCopy.result[key] = [
		{
			name: "JSON stringify",
			result: (() => {
				const a = JSON.parse(JSON.stringify(createdObjects[key]));
				return profile(() => {
					return JSON.parse(JSON.stringify(a));
				});
			})(),
		},
		{
			name: "structured clone",
			result: (() => {
				return profile(() => {
					return structuredClone(createdObjects[key]);
				});
			})(),
		},
		{
			name: "lodash deep clone",
			result: (() => {
				return profile(() => {
					return _.cloneDeep(createdObjects[key]);
				});
			})(),
		},
	];
});
