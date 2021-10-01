import Vue from 'vue';
import store from '../store';
import { IKeyValueObject, IRequestDashboard, IRequestProcess, IRequestRepository, ITimeEventFilter, IVariantFilter } from '@/interface';
import moment from 'moment';
import _ from 'lodash';

function numberWithCommas(x: number | string): string {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
function toDDHHMMSS(time: string | number, dayUnit: string): string {
  const timeNumber = typeof time === 'string' ? parseInt(time, 10) : Number(time.toFixed(0));
  const sec_num = Math.abs(timeNumber); // don't forget the second param
  const days: number = Math.floor(sec_num / 86400);
  let hours: any = Math.floor((sec_num - days * 86400) / 3600);
  let minutes: any = Math.floor((sec_num - (days * 86400 + hours * 3600)) / 60);
  let seconds: any = sec_num - days * 86400 - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  const minus = timeNumber < 0 ? '-' : '';
  const string = hours + ':' + minutes + ':' + seconds;
  return days === 0 ? minus + string : minus + days + dayUnit + ' ' + string;
}
function toYYYYMMDDHHMMSSbyDuration(time: string) {
  const timeNumber = parseInt(time, 10);
  let sec_num = Math.abs(timeNumber);
  const years: any = Math.floor(sec_num / 31536000);
  sec_num -= years * 31536000;
  const months: any = Math.floor(sec_num / 2592000);
  sec_num -= months * 2592000;
  const days: any = Math.floor(sec_num / 86400);
  sec_num -= days * 86400;
  let hours: any = Math.floor(sec_num / 3600);
  sec_num -= hours * 3600;
  let minutes: any = Math.floor(sec_num / 60);
  let seconds: any = (sec_num -= minutes * 60);

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  const minus = timeNumber < 0 ? '-' : '';
  return minus + (years > 0 ? years + 'Y ' : '') + (months > 0 ? months + 'M ' : '') + (days > 0 ? days + 'D ' : '') + hours + ':' + minutes + ':' + seconds;
}
function isPMDeployed(eventView: IKeyValueObject) {
  let haveDeployedPM = false;
  const referenceModel = eventView.referenceModel;
  const relations: IKeyValueObject = eventView.relations;
  if (referenceModel !== undefined) {
    if (referenceModel._type.endsWith('Model') || referenceModel._type.endsWith('Graph') || referenceModel._type.endsWith('GraphImpl')) {
      haveDeployedPM = true;
    }
  } else {
    if (relations !== undefined) {
      for (const [key, item] of Object.entries(relations)) {
        const _item: any = item;
        if (_item._type.endsWith('Model') || _item._type.endsWith('Graph') || _item._type.endsWith('GraphImpl')) {
          if (_item.attributes === undefined || _item.attributes.isDeployed === undefined) {
            continue;
          } else {
            if (_item.attributes.isDeployed.value === true) {
              haveDeployedPM = true;
              break;
            }
          }
        }
      }
    }
  }
  return haveDeployedPM;
}
function buildRepository(vue: Vue): IRequestRepository {
  return {
    _type: 'EventRepository',
    id: vue.$route.params.repositoryId,
    project: {
      _type: 'Project',
      id: vue.$route.params.projectId
    },
    relations: store.getters['repository/getRepoEventView'].relations ? store.getters['repository/getRepoEventView'].relations : {}
  };
}
function buildProcess(vue: Vue, processId: string): IRequestProcess {
  return {
    _type: 'ProcessDependentConfiguration',
    process: {
      _type: 'ProcessModel',
      id: processId,
      project: {
        _type: 'Project',
        id: vue.$route.params.projectId
      }
    }
  };
}
function buildTimeEventFilter(): ITimeEventFilter {
  return {
    _type: 'TimeframeFilterLite',
    minStr: moment(store.getters['common/getFilter'].duration.start).format('YYYY-MM-DD HH:mm:ss'),
    maxStr: moment(store.getters['common/getFilter'].duration.end)
      .endOf('days')
      .format('YYYY-MM-DD HH:mm:ss'),
    keepCases: store.getters['common/getSetting'].common.analysis.keepCases
  };
}
function buildVariantFilter(repository: IRequestRepository, tiemEventFilter: ITimeEventFilter, id: string): IVariantFilter {
  return {
    _type: 'TraceVariantFilterLite',
    config: {
      _type: 'TraceVariantDiscoveryLiteConfiguration',
      repository: repository,
      option: store.getters['common/getFilter'].variantType,
      eventFilters: [tiemEventFilter]
    },
    values: [id]
  };
}
function buildDashboard(repository: IRequestRepository): IRequestDashboard {
  return {
    _type: 'DashboardConfigurationLiteImpl',
    repository: repository,
    preferredId: 'ipd-ent-personal',
    data: {
      _type: 'DashboardImpl'
    }
  };
}
function getRepoPermissions(createdBy: number | string, resourceType: string, action: string) {
  let isCandoit = false;
  const myInfo = store.getters['sso/getMyInfo'];
  if (createdBy == myInfo.id) isCandoit = true;
  else {
    const permissions = myInfo.permissions[`repo.${resourceType}.${action}`];
    if (permissions === 'GROUP') isCandoit = true;
  }
  return isCandoit;
}
function noPermissionAlert(vue: Vue) {
  //bvModalmsgBoxOk(vue, vue.$t('view.repo.alert.title.noPermission').toString(), vue.$t('view.repo.alert.noPermission').toString());
}
function isNoNeedTokenSSO(name: string) {
  switch (name) {
    case 'Login':
    case 'userRegister':
    case 'acountAuthentication':
    case 'forgotPassword': {
      return true;
    }
    default: {
      return false;
    }
  }
}

function bytesFormatter(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function percentFormatter(value: number, max: number) {
  const percent = (value / max) * 100;

  if (percent < 100) {
    return percent.toFixed(2) + '%';
  } else {
    return '100%';
  }
}

function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)) {
    return true;
  } else {
    if (/MacIntel/i.test(navigator.platform) && navigator.maxTouchPoints === 5) {
      return true;
    } else {
      return false;
    }
  }
}

function isMaxWidth991() {
  if (window.matchMedia('(max-width: 991.98px)').matches) {
    /* 뷰포트 너비가 991.98px 픽셀 이하 */
    return true;
  } else {
    /* 뷰포트 너비가 991.98px 픽셀 초과 */
    return false;
  }
}

function isMaxWidth767() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    /* 뷰포트 너비가 767px 픽셀 이하 */
    return true;
  } else {
    /* 뷰포트 너비가 768px 픽셀 이상 */
    return false;
  }
}

function isMaxWidth1099() {
  if (window.matchMedia('(max-width: 1099px)').matches) {
    /* 뷰포트 너비가 1099px 픽셀 이하 */
    return true;
  } else {
    /* 뷰포트 너비가 1099px 픽셀 초과 */
    return false;
  }
}

export default {
  numberWithCommas,
  toDDHHMMSS,
  toYYYYMMDDHHMMSSbyDuration,
  isPMDeployed,
  buildRepository,
  buildProcess,
  buildTimeEventFilter,
  buildVariantFilter,
  buildDashboard,
  getRepoPermissions,
  noPermissionAlert,
  isNoNeedTokenSSO,
  bytesFormatter,
  percentFormatter,
  isMobile,
  isMaxWidth991,
  isMaxWidth767,
  isMaxWidth1099
};
