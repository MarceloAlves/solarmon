export type SiteDetails = {
  id: number;
  name: string;
  accountId: number;
  status: string;
  peakPower: number;
  lastUpdateTime: Date;
  installationDate: Date;
  ptoDate: Date;
  notes: string;
  type: string;
  location: {
    country: string;
    state: string;
    city: string;
    address: string;
    address2: string;
    zip: string;
    timeZone: string;
    countryCode: string;
    stateCode: string;
  };
  primaryModule: {
    manufacturerName: string;
    modelName: string;
    maximumPower: number;
    temperatureCoef: number;
  };
  uris: {
    DETAILS: string;
    DATA_PERIOD: string;
    OVERVIEW: string;
  };
  publicSettings: {
    name?: string;
    isPublic: boolean;
  };
};
