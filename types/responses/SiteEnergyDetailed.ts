import { TimeUnit } from '../TimeUnit';

export type SiteEnergyDetailed = {
  timeUnit: TimeUnit;
  unit: string;
  meters: SiteEnergyDetailedMeter[];
};

type SiteEnergyDetailedMeter = {
  type: 'Production' | 'Consumption';
  values: SiteEnergyDetailedMeterValue[];
};

type SiteEnergyDetailedMeterValue = {
  date: Date;
  value: number;
};
