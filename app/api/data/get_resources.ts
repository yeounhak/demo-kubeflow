export const resourceData = {
  cpu: { 
    request: 2.5,
    limit: 4.2,
    total: 8, 
    unit: "cores" 
  },
  memory: { 
    request: 8.5,
    limit: 12.5,
    total: 32, 
    unit: "GB" 
  },
  gpu: { 
    request: 0.5,
    limit: 1,
    total: 4, 
    unit: "units" 
  },
  storage: { 
    used: 256,
    total: 1000, 
    unit: "GB" 
  },
  mig: {
    request: 2,
    limit: 3,
    total: 8,
    unit: "instances"
  }
};