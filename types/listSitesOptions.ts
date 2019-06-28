export type ListSitesOptions = {
  size?: number;
  startIndex?: number;
  searchText?:
    | 'Name'
    | 'Notes'
    | 'Address'
    | 'City'
    | 'Zip code'
    | 'Full address'
    | 'Country';
  sortProperty?:
    | 'Name'
    | 'Country'
    | 'State'
    | 'City'
    | 'Address'
    | 'Zip'
    | 'Status'
    | 'PeakPower'
    | 'InstallationDate'
    | 'Amount'
    | 'MaxSeverity'
    | 'CreationTime';
  sortOrder?: 'ASC' | 'DESC';
  status?: 'Active' | 'Pending' | 'Disabled' | 'All';
};
