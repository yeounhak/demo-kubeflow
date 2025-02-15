"use client";

import { ResourceGauge } from "./ResourceGauge";
import { QuickShortcuts } from "./QuickShortcuts";
import { RecentActivities } from "./RecentActivities";
import { SystemNotices } from "./SystemNotices";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { resourceData } from "@/app/api/data/get_resources";
import { CalendarDays, Activity, Bell } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Home</h1>
      
      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard" className="flex items-center">
            <CalendarDays className="mr-2 h-4 w-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center">
            <Activity className="mr-2 h-4 w-4" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="notices" className="flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            Notices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <ResourceGauge
              title="CPU"
              request={resourceData.cpu.request}
              limit={resourceData.cpu.limit}
              total={resourceData.cpu.total}
              unit={resourceData.cpu.unit}
            />
            <ResourceGauge
              title="Memory"
              request={resourceData.memory.request}
              limit={resourceData.memory.limit}
              total={resourceData.memory.total}
              unit={resourceData.memory.unit}
            />
            <ResourceGauge
              title="GPU"
              request={resourceData.gpu.request}
              limit={resourceData.gpu.limit}
              total={resourceData.gpu.total}
              unit={resourceData.gpu.unit}
            />
            <ResourceGauge
              title="Storage"
              used={resourceData.storage.used}
              total={resourceData.storage.total}
              unit={resourceData.storage.unit}
            />
            <ResourceGauge
              title="MIG"
              request={resourceData.mig.request}
              limit={resourceData.mig.limit}
              total={resourceData.mig.total}
              unit={resourceData.mig.unit}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuickShortcuts />
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <RecentActivities />
        </TabsContent>

        <TabsContent value="notices">
          <SystemNotices />
        </TabsContent>
      </Tabs>
    </div>
  );
}