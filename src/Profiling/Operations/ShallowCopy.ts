import { IChartInfo } from "../ChartsInfo";
import { createdObjects } from "../Constants/objects";
import { profile } from "../Profile";
import * as _ from "lodash";

export const ShallowCopy: IChartInfo = {
	label: "Shallow copy",
	result: {},
};

(Object.keys(createdObjects) as string[]).forEach((key) => {
	ShallowCopy.result[key] = [
		{
			name: "Object assign",
			result: (() => {
				return profile(() => {
					return Object.assign({}, createdObjects[key]);
				});
			})(),
		},
		{
			name: "Spread syntax",
			result: (() => {
				return profile(() => {
					return { ...createdObjects[key] };
				});
			})(),
		},
		{
			name: "Lodash clone",
			result: (() => {
				return profile(() => {
					return _.clone(createdObjects[key]);
				});
			})(),
		},
	];
});
