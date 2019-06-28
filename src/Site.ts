import Client from './Client';
import { ListSitesOptions } from '../types/listSitesOptions';
import { TimeUnit } from '../types/TimeUnit';
import { SiteList } from '../types/responses/SiteList';
import { SiteOverview } from '../types/responses/SiteOverview';
import { SiteCurrentPowerFlow } from '../types/responses/SiteCurrentPowerFlow';
import { SiteDetails } from '../types/responses/SiteDetails';
import { SiteDataPeriod } from '../types/responses/SiteDataPeriod';
import { SiteEnergy } from '../types/responses/SiteEnergy';
import { SiteEnergyDetailed } from '../types/responses/SiteEnergyDetailed';
import { SitePower } from '../types/responses/SitePower';
import { SitePowerDetailed } from '../types/responses/SitePowerDetailed';

class Site {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**  Retrieves the current power flow between all elements of the site including PV array, storage (battery), loads (consumption) and grid */
  currentPowerFlow(siteId: string): Promise<SiteCurrentPowerFlow> {
    return this.client
      .request({ url: `/site/${siteId}/currentPowerFlow` })
      .then(r => r.siteCurrentPowerFlow)
      .catch(e => e);
  }

  /** Displays the site details, such as name, location, status, etc. */
  details(siteId: string): Promise<SiteDetails> {
    return this.client
      .request({ url: `/site/${siteId}/details` })
      .then(r => r.details)
      .catch(e => e);
  }

  /**  Return the energy production start and end dates of the site. */
  dataPeriod(siteId: string): Promise<SiteDataPeriod> {
    return this.client
      .request({ url: `/site/${siteId}/dataPeriod` })
      .then(r => r.dataPeriod)
      .catch(e => e);
  }

  /** Return the site energy measurements */
  energy(
    siteId: string,
    opts: { startDate: Date; endDate: Date; timeUnit?: TimeUnit }
  ): Promise<SiteEnergy> {
    return this.client
      .request({ url: `/site/${siteId}/energy`, opts })
      .then(r => r.energy)
      .catch(e => e);
  }

  /** Detailed site energy measurements from meters such as consumption, export (feed-in), import (purchase), etc. */
  energyDetails(
    siteId: string,
    opts: {
      startTime: Date;
      endTime: Date;
      timeUnit?: TimeUnit;
      meters?: string;
    }
  ): Promise<SiteEnergyDetailed> {
    return this.client
      .request({ url: `/site/${siteId}/energyDetails`, opts })
      .then(r => r.energyDetails)
      .catch(e => e);
  }

  /** Returns a list of sites related to the given token */
  list(opts: ListSitesOptions): Promise<SiteList> {
    return this.client
      .request({ url: '/sites/list', params: opts })
      .then(r => r.sites)
      .catch(e => e);
  }

  /** Display the site overview data. */
  overview(siteId: string): Promise<SiteOverview> {
    return this.client
      .request({ url: `/site/${siteId}/overview` })
      .then(r => r.overview)
      .catch(e => e);
  }

  /** Return the site power measurements in 15 minutes resolution */
  power(
    siteId: string,
    opts: { startTime: Date; endTime: Date }
  ): Promise<SitePower> {
    return this.client
      .request({ url: `/site/${siteId}/power`, opts })
      .then(r => r.power)
      .catch(e => e);
  }

  /**  Detailed site power measurements from meters such as consumption, export (feed-in), import (purchase), etc */
  powerDetails(
    siteId: string,
    opts: { startTime: Date; endTime: Date; meters?: string }
  ): Promise<SitePowerDetailed> {
    return this.client
      .request({ url: `/site/${siteId}/powerDetails`, opts })
      .then(r => r.powerDetails)
      .catch(e => e);
  }
}

export default Site;
