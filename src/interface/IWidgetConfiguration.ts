import IKeyValueObject from './IKeyValueObject';
import { IRequestRepository } from './IRequest';

export interface IWidgetDataConfiguration {
  _type: 'EchartWidgetLiteImpl' | 'StatisticsWidgetLiteImpl' | 'DataTableWidgetLiteImpl';
  id?: string;
  name?: string;
  widgetType: 'KPI' | 'TABLE' | 'LINE_CHART' | 'BAR_CHART' | 'PIE_CHART' | 'BOXPLOT_CHART' | 'SUNBURST_CHART' | 'SCATTER_CHART';
  dataParams: {
    timeFormat?: string; // YYYY-MM, YYYY-MM-DD HH24, YYYY-MM-DD
    ci?: string;
    nLimit?: number; // if no limit put -1
    bins?: string;
    nbin?: string;
    overTimeFormat?: string;
    startCaseOnly?: boolean;
    erLimit?: number | string; // resource count limit, default null
    eaLimit?: number | string; // activity count limit, default null
    ucl?: number; // range [0.0 - 1.0]
    threshold?: string; // option: {"ucl", "avg"}
    outlierLimit?: number; //each x axis will show 5 outlier >= upper and 5 outlier <= lower outlier; optional, if not set default is 5
    arcLimit?: number; // 표준 프로세스 없을 경우, this is for maximum number of arcs shown (arc 긴 소요시간 기준); optional, if not set default is 25
  };
}

export interface IWidgetConfiguration {
  _type: 'SqlDataWidgetConfiguration';
  repository: IRequestRepository;
  eventFilters: IKeyValueObject[];
  data: IWidgetDataConfiguration;
}
