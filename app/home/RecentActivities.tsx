"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentActivities } from "@/app/api/data/get_recentActivities";

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        {recentActivities.length > 0 ? (
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {activity.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.type} {activity.action}
                  </p>
                </div>
                <time className="text-sm text-gray-500">
                  {new Date(activity.timestamp).toLocaleString()}
                </time>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500">
            No recent activities found
          </div>
        )}
      </CardContent>
    </Card>
  );
}