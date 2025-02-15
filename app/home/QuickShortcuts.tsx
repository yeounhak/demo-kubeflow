"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickShortcuts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Shortcuts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Create Notebook Server</h3>
            <p className="text-sm text-gray-500">Launch a new Jupyter notebook server</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Upload Pipeline</h3>
            <p className="text-sm text-gray-500">Import a new ML pipeline</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}