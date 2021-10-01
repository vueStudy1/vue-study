export interface ISetting {
  common?: {
    // 공통
    theme?: 'gray' | 'brown'; // 테마
    notifiLimit?: {
      // Notifi Limit
      use?: 'day' | 'count';
      day?: number; // {1,30}, -1
      count?: number; // {1, 100}, -1
    };
    workspace?: {
      // 워크 스페이스
      whenEventLogIsClicked?: string; // 이벤트 로그 클릭시 {}
      defaultWorkspace?: string; // 이동 화면 기본 워크스페이스 {}
      maxStorage?: number; // (MB) {250, ~} admin
    };
    analysis?: {
      // 분석 전체
      defaultAnalysisPeriod?: 'all' | 'month' | 'year'; // 기본 분석 기간 {all, monthly, year, custom} {전체, v월간, 년간, custom}
      keepCases?: string; //케이스 포함 타입 {START, COMPLETE, INTERSECT, CONTAINED}
      variantType?: string; // 기본 분석 항목 {analysisFlow, monthly, dynamicAttribute} {분석흐름, 월간, dynamic attribute}
      eventBag?: boolean; // all algorithms, for use EventBag
    };
  };

  // 09.10 notification -> common.notifiLimit
  /* notification?: {
    day?: number; // {1,30}, -1
    count?: number; // {1, 100}, -1
  }; */

  // 09.10 workspace -> common.workspace
  /* workspace?: {
    whenEventLogIsClicked?: string; // 이벤트 로그 클릭시 {}
    defaultWorkspace?: string; // 이동 화면 기본 워크스페이스 {}
    maxStorage?: number; // (MB) {250, ~} admin
    resultCacheSize?: number; // (MB) admin
    projectCount?: number; // {10,~} admin
    datasetCount?: number; // {10,~} admin
    datasetEventRepoPerDataset?: number; // {3, ~} admin
    eventRepoMaxRowUpload?: number; // {100000,~} admin
    processModelCount?: number; // {30,~} admin
  }; */

  // 09.10 global -> common.analysis
  /* global?: {
    // 분석 글로벌
    defaultAnalysisPeriod?: 'all' | 'month' | 'year' | 'custom'; // 기본 분석 기간 {all, monthly, year, custom} {전체, v월간, 년간, custom}
    keepCases?: string; //케이스 포함 타입 {START, COMPLETE, INTERSECT, CONTAINED}
    variantType?: string; // 기본 분석 항목 {analysisFlow, monthly, dynamicAttribute} {분석흐름, 월간, dynamic attribute}
  }; */
  dashboard?: {
    // 대시보드
    //default tab
    defaultTab?: string; // {dataSummary} {데이터 요약}
    // 고정 탭
    activeTab?: {
      personal?: boolean;
      overview?: boolean;
      activity?: boolean;
      resource?: boolean;
      originator?: boolean;
      cost?: boolean;
    }; // {personalization, dataSummary, activity, resource, manager, cost} {개인화, 데이터 요약, 액티비티, 리소스, 담당자, 비용}
  };
  model?: {
    // 프로세스 모델
    dep?: {
      complex?: number; // heuristics dependency threshold complex
      simple?: number; // heuristics dependency threshold simple
    };
    freq?: {
      complex?: number; // heuristics freqeuncy threshold complex
      simple?: number; // heuristics freqeuncy threshold simple
    };
    nodeSign?: {
      complex?: number; // fuzzy node significance threshold complex
      simple?: number; // fuzzy node significance threshold simple
    };
    arcSign?: {
      complex?: number; // fuzzy arc significance threshold complex
      simple?: number; // fuzzy arc significance threshold simple
    };
  };
  discovery?: {
    // 프로세스 분석
    nodeText?: string; // Node KPI {min duration, max duration, count, bottleneck}
    arcText?: string; // 연결선 KPI {min duration, max duration, count, rework}
  };
  delta?: {
    // 프로세스 비교
    nodeText?: string; // Node KPI {min duration, max duration, count, bottleneck}
    arcText?: string; // 연결선 KPI {min duration, max duration, count, rework}
    viewMode?: string; // 보기방법 {합쳐서 보기, 나눠서 보기}
  };
  animation?: {
    // 프로세스 애니메이션
    nodeText?: string; // Node KPI {min duration, max duration, count, bottleneck}
    arcText?: string; // 연결선 KPI {min duration, max duration, count, rework}
    caseLimit?: number; // 케이스 한도, min = 10, max = 500
    speedLimit?: number; // Speed 한도, min = 1, max = 1000000
  };
  social?: {
    // 리소스 관계 분석 social
    layout?: string; // 보기방법 {v default, circle}
    colEventActivity?: string; // 조건 기준 {v activity, resource, originator, 등}
  };
  matrix?: {
    // 데이터 분석 matrix
    selectedX?: string; // 보기방법 {월간, v 액티비티, 연결선, 담당자, 등}
    selectedY?: string; // 조건 기준 (분석기준) {액티비티, 연결선, v 담당자, 등}
    selectedColorBy?: string; // {count, max, min, avg, 등}
  };
  dotted?: {
    // 액티비티 분석 dotted
    defaultX?: string; // 보기방법 {월간, 액티비티, 연결선, 담당자, 등}
    defaultY?: string; // 조건 기준 (분석기준) {액티비티, 연결선, 담당자, 등}
    defaultDot?: string; // {event}
    sortBy?: string; // {logical start, shortest duration, longest duration, 등}
    showY?: string; // {top5, top10, top20, 등}
  };
  // 하루동안 보이지 않기
  sightDay?: {
    dataset?: string; // 원본 데이터
    repository?: string; // 이벤트
    subrepository?: string; //서브 이벤트
    process?: string;
  };
}

export const DefaultSetting: ISetting = {
  common: {
    theme: 'gray',
    notifiLimit: {
      use: 'count',
      day: 1,
      count: 10
    },
    workspace: {
      whenEventLogIsClicked: 'Dashboard',
      defaultWorkspace: 'a',
      maxStorage: 250
    },
    analysis: {
      defaultAnalysisPeriod: 'month',
      keepCases: 'CONTAINED',
      variantType: 'STANDARD',
      eventBag: false,
    }
  },
  /* workspace: {
    whenEventLogIsClicked: 'a',
    defaultWorkspace: 'a',
    maxStorage: 250,
    resultCacheSize: 250,
    projectCount: 10,
    datasetCount: 10,
    datasetEventRepoPerDataset: 3,
    eventRepoMaxRowUpload: 100000,
    processModelCount: 30
  }, */
  /* global: {
    defaultAnalysisPeriod: 'month',
    keepCases: 'CONTAINED',
    variantType: 'STANDARD'
  }, */
  dashboard: {
    defaultTab: 'overview',
    activeTab: {
      personal: false,
      overview: true,
      activity: true,
      resource: true,
      originator: true,
      cost: true
    }
  },
  model: {
    dep: {
      complex: -1,
      simple: 0.5
    },
    freq: {
      complex: 0,
      simple: 0
    },
    nodeSign: {
      complex: 50,
      simple: 50
    },
    arcSign: {
      complex: 50,
      simple: 80
    }
  },
  discovery: {
    nodeText: 'statistics.average',
    arcText: 'statistics.count'
  },
  delta: {
    nodeText: 'statistics.average',
    arcText: 'statistics.count',
    viewMode: 'twoView'
  },
  animation: {
    nodeText: 'statistics.average',
    arcText: 'statistics.count',
    caseLimit: 500,
    speedLimit: 100000,
  },
  social: {
    layout: 'd3-force',
    colEventActivity: 'ea'
  },
  matrix: {
    selectedX: 'esm',
    selectedY: 'ea',
    selectedColorBy: 'countCases'
  },
  dotted: {
    defaultX: 'timeline',
    defaultY: 'case',
    defaultDot: 'event',
    sortBy: 'longestDuration',
    showY: 'top10'
  },
  sightDay: {
    dataset: '',
    process: '',
    repository: '',
    subrepository: ''
  }
};
