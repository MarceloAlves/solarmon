export type SiteList = {
  count: number;
  site: Site[];
};

type Site = {
  /** The site id */
  id: number;
  /** The site name */
  name: string;
  /** The account this site belongs to */
  accountId: number;
  /** The site status */
  status: string;
  /** Site peak power */
  peakPower: 'Active' | 'Pending' | 'Disabled';
  currency: string;
  /** Site installation date */
  installationDate: Date;
  /** Permissino to operate date */
  ptoDate: Date;
  notes: string;
  /** Site type */
  type: string;
  /** Site location */
  location: Location;
  /** Number of open alerts in this site * */
  alertQuantity: number;
  /** The highest alert severity in this site * */
  alertSeverity: string;
  /** Includes if this site is public and its public name */
  publicSettings: PublicSettings;
};

type Location = {
  country: string;
  state: string;
  city: string;
  address: string;
  secondaryAddress: string;
  timeZone: string;
  zip: string;
};

type PublicSettings = {
  name: string;
  isPublic: boolean;
};
