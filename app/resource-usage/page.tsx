"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "lucide-react";

export default function ResourceUsagePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Resource Usage</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>CPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No CPU usage data available.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Memory Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No memory usage data available.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>GPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No GPU usage data available.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}