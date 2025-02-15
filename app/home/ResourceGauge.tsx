"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface ResourceGaugeProps {
  title: string;
  request?: number;
  limit?: number;
  used?: number;
  total: number;
  unit: string;
}

export function ResourceGauge({ title, request, limit, used, total, unit }: ResourceGaugeProps) {
  const getColor = (percentage: number) => {
    if (percentage >= 90) return "#ef4444";
    if (percentage >= 75) return "#f97316";
    if (percentage >= 50) return "#eab308";
    return "#22c55e";
  };

  const getData = () => {
    if (request !== undefined && limit !== undefined) {
      const requestValue = request;
      const limitValue = limit - request;
      const remainingValue = total - limit;
      
      const requestPercentage = (request / total) * 100;
      const limitPercentage = (limit / total) * 100;

      return [
        { name: "Request", value: requestValue, color: getColor(requestPercentage) },
        { name: "Limit", value: limitValue, color: getColor(limitPercentage) },
        { name: "Remaining", value: remainingValue, color: "#e5e7eb" }
      ];
    } else if (used !== undefined) {
      const usedPercentage = (used / total) * 100;
      return [
        { name: "Used", value: used, color: getColor(usedPercentage) },
        { name: "Remaining", value: total - used, color: "#e5e7eb" }
      ];
    }
    return [];
  };

  const data = getData();
  const mainValue = request ?? used ?? 0;
  const mainPercentage = ((mainValue / total) * 100).toFixed(1);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative w-full h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  startAngle={180}
                  endAngle={0}
                  innerRadius="60%"
                  outerRadius="100%"
                  dataKey="value"
                  cx="50%"
                  cy="100%"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
              <p className="text-xl font-bold">{mainPercentage}%</p>
            </div>
          </div>

          {request !== undefined && limit !== undefined ? (
            <div className="w-full space-y-2 mt-2">
              <div className="flex flex-col justify-between items-start text-sm px-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: data[0].color }}></span>
                  <div>
                    <p className="text-xs text-gray-500">Request: {request}/{total} {unit}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: data[1].color }}></span>
                  <div>
                    <p className="text-xs text-gray-500">Limit: {limit}/{total} {unit}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-sm text-center mt-2">
              <p>{mainValue}/{total} {unit}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}