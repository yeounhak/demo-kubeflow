"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "lucide-react";

export default function MLflowPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">MLflow</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Experiments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No MLflow experiments found.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Models</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No MLflow models found.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}