import { TimeUnit } from '../TimeUnit';

export type SitePower = {
  timeUnit: TimeUnit;
  unit: string;
  values: SitePowerValue;
};

type SitePowerValue = {
  date: string;
  value: number;
};
