/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONZippedDecoder<T0 = void, T1 = void, T2 = void> extends BCJSONDecoder {
    decodeFileAtSubpath_error<R = unknown, P0 = unknown, P1 = unknown>(_decodeFileAtSubpath: P0, _error: P1): R;
    rawDataAtSubpath_error<R = unknown, P0 = unknown, P1 = unknown>(_rawDataAtSubpath: P0, _error: P1): R;
    containsFileAtSubpath<R = boolean, P0 = unknown>(_containsFileAtSubpath: P0): R;
    dealloc<R = void>(): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    zip<R = void>(): R;
    setZip<R = void, P0 = void>(_v: P0): R;
  }
  namespace BCJSONZippedDecoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCJSONDecoder {}
  }
}

declare const BCJSONZippedDecoder: cocoa.BCJSONZippedDecoder.CLASS;
