import { ArrayConcatenation } from "../../Profiling/Operations/ArrayConcatenation";
import { ProfilingResult } from "./ProfilingResult";
import React from "react";
import { ArrayCopy } from "../../Profiling/Operations/ArrayCopy";
import { DeepCopy } from "../../Profiling/Operations/DeepCopy";
import { ShallowCopy } from "../../Profiling/Operations/ShallowCopy";
import { For } from "../../Profiling/Operations/For";

export const Charts = () => {
  return (
    <div className="charts">
      <ProfilingResult idx={0} info={ArrayConcatenation} />
      <ProfilingResult idx={1} info={ArrayCopy} />
      <ProfilingResult idx={2} info={DeepCopy} />
      <ProfilingResult idx={3} info={ShallowCopy} />
      <ProfilingResult idx={4} info={For} />
    </div>
  );
};
