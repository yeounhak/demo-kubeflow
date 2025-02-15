export const resourceData = {
  cpu: { used: 4.2, total: 8, unit: "cores" },
  memory: { used: 12.5, total: 32, unit: "GB" },
  gpu: { used: 1, total: 4, unit: "units" },
  storage: { used: 256, total: 1000, unit: "GB" },
};

export const recentActivities = [
  {
    id: 1,
    type: "notebook",
    action: "created",
    name: "tensorflow-training",
    timestamp: "2024-03-20T10:30:00Z",
  },
  {
    id: 2,
    type: "pipeline",
    action: "completed",
    name: "data-preprocessing",
    timestamp: "2024-03-20T09:15:00Z",
  },
];

export const notices = [
  {
    id: 1,
    title: "System Maintenance",
    message: "Scheduled maintenance on March 25, 2024",
    severity: "info",
    date: "2024-03-20T08:00:00Z",
  },
  {
    id: 2,
    title: "GPU Quota Update",
    message: "GPU quotas have been increased for all users",
    severity: "success",
    date: "2024-03-19T15:30:00Z",
  },
];