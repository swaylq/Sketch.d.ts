/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMetadataQueryResultArray<T0 = void, T1 = void, T2 = void> extends NSArray {
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    retainCount<R = number>(): R;
    dealloc<R = void>(): R;
    _init<R = unknown, P0 = unknown>(__init: P0): R;
  }
  namespace _NSMetadataQueryResultArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArray {}
  }
}
