import { TimeUnit } from '../TimeUnit';

export type SiteEnergy = {
  timeUnit: TimeUnit;
  unit: string;
  values: SiteEnergyValues[];
};

type SiteEnergyValues = {
  date: Date;
  value?: number;
};
