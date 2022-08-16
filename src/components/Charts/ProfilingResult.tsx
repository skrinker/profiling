import React from "react";
import Chart from "react-google-charts";
import { IChartInfo } from "../../Profiling/ChartsInfo";
import "./ProfilingResult.scss";

interface IProfilingResult {
  info: IChartInfo;
  idx: number;
}

export const ProfilingResult = (props: IProfilingResult) => {
  return (
    <div tabIndex={props.idx} className="charts-info">
      <div className="title">{props.info.label}</div>
      <div className="charts">
        {Object.keys(props.info.result).map((type, idx) => {
          return (
            <Chart
              key={idx}
              options={{
                hAxis: {
                  title: type,
                  minValue: 0,
                },
              }}
              chartType="BarChart"
              data={[
                ["operations", "time"],
                ...props.info.result[type].map((value) => [
                  value.name,
                  value.result,
                ]),
              ]}
              width="500px"
              height="400px"
            />
          );
        })}
      </div>
    </div>
  );
};
