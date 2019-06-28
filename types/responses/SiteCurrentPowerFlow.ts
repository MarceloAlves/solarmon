export type SiteCurrentPowerFlow = {
  unit: string;
  connections: Connections[];
  GRID: {
    status: string;
    currentPower: number;
  };
  LOAD: {
    status: string;
    currentPower: number;
  };
  PV: {
    status: string;
    currentPower: number;
  };
  STORAGE: {
    status: string;
    currentPower: number;
    chargeLevel: number;
    critical: boolean;
  };
};

type Connections = {
  from: string;
  to: string;
};
