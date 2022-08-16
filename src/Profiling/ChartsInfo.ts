export interface IChartInfo {
  label: string;
  result: IProfilingResults;
}

export interface IChartPiece {
  name: string;
  result: number;
}

export interface IProfilingResults {
  [type: string]: IChartPiece[];
}
