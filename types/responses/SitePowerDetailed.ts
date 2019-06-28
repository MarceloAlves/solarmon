import { TimeUnit } from '../TimeUnit';

export type SitePowerDetailed = {
  timeUnit: TimeUnit;
  unit: string;
  meters: SitePowerDetailedMeter[];
};

type SitePowerDetailedMeter = {
  type:
    | 'Production'
    | 'Consumption'
    | 'SelfConsumption'
    | 'Purchased'
    | 'FeedIn';
  values: SitePowerDetailedMeterValue[];
};

type SitePowerDetailedMeterValue = {
  date: Date;
  value: number;
};
