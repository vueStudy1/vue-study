import { Moment } from 'moment';

interface IDuration {
  start: Moment | Date;
  end: Moment | Date;
}

export default interface IFilter {
  duration: IDuration;
  // dashbaord
  comparedDuration?: IDuration;
  variantType?: string;
  // discovery
  algorithm?: 'fhm' | 'fuzzy';
  // discovery, delta, animation
  nodeText?: string;
  arcText?: string;
  dep?: number;
  freq?: number;
  // discovery
  nodeSign?: number;
  arcSign?: number;
  // detla
  viewMode?: 'merged' | 'twoView';
  // animation
  tokenInclude?: string;
  tokenValue?: string;
  // social
  layout?: string;
  colEventActivity?: string;
  rank?: string;
  // matrix
  selectedX?: string;
  selectedY?: string;
  // dotted
  selectedValue?: string;
  selectedColorBy?: string;
}
