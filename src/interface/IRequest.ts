import IKeyValueObject from './IKeyValueObject';

export interface IRequestRepository {
  _type: 'EventRepository';
  id: string;
  project: {
    _type: 'Project';
    id: string;
  };
  referenceModel?: IKeyValueObject;
  relations: IKeyValueObject;
}

export interface IRequestProcess {
  _type: 'ProcessDependentConfiguration';
  process: {
    _type: 'ProcessModel';
    id: string;
    project: {
      _type: 'Project';
      id: string;
    };
  };
}

export interface ITimeEventFilter {
  _type: 'TimeframeFilterLite';
  minStr: string;
  maxStr: string;
  keepCases?: 'START' | 'COMPLETE' | 'INTERSECT' | 'CONTAINED';
}

export interface IVariantFilter {
  _type: 'TraceVariantFilterLite';
  config: {
    _type: 'TraceVariantDiscoveryLiteConfiguration';
    repository: IRequestRepository;
    option: string; // 'STANDARD' | 'ES_MONTHLY'
    eventFilters: ITimeEventFilter[];
  };
  values: string[];
}

export interface IRequestDashboard {
  _type: 'DashboardConfigurationLiteImpl';
  repository: IRequestRepository;
  preferredId: string | 'ipd-ent-personal';
  data: {
    _type: 'DashboardImpl';
    pages?: {
      [key: string]: {
        _type: 'PageImpl';
        id: string;
        name: string;
      };
    };
  };
}
