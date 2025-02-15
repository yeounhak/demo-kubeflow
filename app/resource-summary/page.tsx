"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";

export default function ResourceSummaryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Resource Summary</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Compute Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No compute resources data available.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Storage Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No storage resources data available.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}