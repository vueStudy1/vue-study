import IKeyValueObject from './IKeyValueObject';

// 'variant' | 'graph' | 'token' | 'chart' | 'case' | 'bottleneck' | 'rework'

export interface IWorkFlowRequestActon {
  _type: 'ServiceAction';
  id: string;
  serviceId: string;
  client?: {
    state: string;
  };
  configurations: IKeyValueObject[] | IKeyValueObject;
}

export interface IWorkFlowRequest {
  _type: 'ConcurrentWorkflowContext';
  namespace: string; // projectId
  actions: {
    [key: string]: IWorkFlowRequestActon;
  };
}

export interface IWorkFlowResponse {
  _type: 'ConcurrentWorkflowContext';
  id: string;
  hash: string;
  namespace: string;
  info: {
    _type: 'WorkflowContextInfoImpl';
    id: string;
    hash: string;
    state: 'CREATED' | 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'ERROR';
    code: number;
    created: number;
    completed: number;
    elapsedTime: number;
    progress: number;
    progressData: string;
  };
  actions: {
    [key: string]: {
      _type: 'ServiceAction';
      id: string;
      serviceId: string;
      hash: string;
      dataUri: string;
      info: {
        id: string;
        dataUri: string;
        state: 'CREATED' | 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'ERROR';
        code: number;
      };
      client?: {
        state: string;
      };
      configurations: IKeyValueObject[];
    };
  };
}
