import { blue, purple, green, orange, brown, yellow, red } from "@mui/material/colors";
import { useState } from "react";
import {
  PieChart as RePieChart,
  Cell,
  Pie,
  ResponsiveContainer,
} from "recharts";
import ActiveShape from "./active-shape";


export default function HolderChart({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  
  const getColorShades = () => {
    const colorList = [green, blue, purple, orange, yellow, red];

    let colorsParsed: any[] = [];
    colorList.forEach((color) => {
      colorsParsed.push(
        color[100],
        color[300],
        color[500],
        color[700],
        color[900],
        color["A100"],
        color["A700"],
        color["A400"]
      )
    });
    return colorsParsed;

  };
  
  const COLORS = getColorShades();

  const topHolders = data.map((item: any, index: any) => {
    return {
      address: item.address,
      value: item.balance.formatted,
      fill: COLORS[index],
    };
  });

  const onPieEnter = (_: any, index: any) => setActiveIndex(index);

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" aspect={2}>
        <RePieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={ActiveShape}
            data={topHolders}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {topHolders.map(({ fill }: any, index: any) => (
              <Cell key={`cell-${index}`} fill={fill} />
            ))}
          </Pie>
        </RePieChart>
      </ResponsiveContainer>
    </div>
  )
}


