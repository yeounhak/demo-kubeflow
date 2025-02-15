"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notices } from "@/app/api/data/get_notices";

export function SystemNotices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Notices</CardTitle>
      </CardHeader>
      <CardContent>
        {notices.length > 0 ? (
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`p-4 rounded-lg ${
                  notice.severity === 'info'
                    ? 'bg-blue-50'
                    : notice.severity === 'success'
                    ? 'bg-green-50'
                    : 'bg-yellow-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{notice.title}</h3>
                    <p className="text-sm text-gray-600">{notice.message}</p>
                  </div>
                  <time className="text-sm text-gray-500">
                    {new Date(notice.date).toLocaleDateString()}
                  </time>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500">
            No notices at this time
          </div>
        )}
      </CardContent>
    </Card>
  );
}