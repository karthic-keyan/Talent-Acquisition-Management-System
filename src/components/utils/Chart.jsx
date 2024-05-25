import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    Received: 590,
    Processed: 800,
    amt: 1400,
    cnt: 800,
  },
  {
    name: "Page B",
    Received: 300,
    Processed: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    Received: 800,
    Processed: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    Received: 1050,
    Processed: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    Received: 200,
    Processed: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    Received: 500,
    Processed: 680,
    amt: 1700,
    cnt: 380,
  },
];

export default function Chart({width, height}) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <ComposedChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          label={{ position: "insideBottomRight", offset: 0 }}
          scale="band"
        />
        <YAxis label={{ angle: -90, position: "insideLeft" }} />
        <Tooltip />
        {/* <Legend iconType={"square"} /> */}
        {/* <Area type="monotone" dataKey="amt" fill="transparent" stroke="#8884d8" /> */}
        <Bar dataKey="Processed" barSize={20} fill="#277acc" />
        <Line
          dot={false}
          type="basis"
          dataKey="Received"
          strokeWidth={3}
          stroke="#436281"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
