"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, HardDrive } from "lucide-react";

export default function VolumesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Volumes</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Volume
        </Button>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Persistent Volumes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              No volumes found. Create a new volume to get started.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}