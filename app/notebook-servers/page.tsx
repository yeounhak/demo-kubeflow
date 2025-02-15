"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function NotebookServersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notebook Servers</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Server
        </Button>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Available Servers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No notebook servers found. Create a new server to get started.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}