"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wind } from "lucide-react";

export default function AirflowPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Airflow</h1>
      <Card>
        <CardHeader>
          <CardTitle>DAG Runs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>DAG ID</TableHead>
                <TableHead>Run ID</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Start Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={4} className="text-center text-sm text-gray-500">
                  No DAG runs found
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}