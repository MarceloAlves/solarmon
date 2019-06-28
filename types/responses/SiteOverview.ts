export type SiteOverview = {
  /** Last Updated DateTime */
  lastUpdateTime: Date;
  /** Lifetime Energy Produced */
  lifeTimeData: {
    energy: number;
  };
  /** Energy Produced In The Last Year */
  lastYearData: {
    energy: number;
  };
  /** Energy Produced In The Last Month */
  lastMonthData: {
    energy: number;
  };
  /** Energy Produced In The Last Day */
  lastDayData: {
    energy: number;
  };
  /** Current Energy Produced */
  currentPower: {
    power: number;
  };
  measuredBy: string;
};
