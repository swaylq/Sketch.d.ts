/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDOStreamData<T0 = void, T1 = void, T2 = void> extends NSMutableData {
    length<R = number>(): R;
    mutableBytes<R = void>(): R;
    bytes<R = void>(): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
  }
  namespace NSDOStreamData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableData {}
  }
}

declare const NSDOStreamData: cocoa.NSDOStreamData.CLASS;
