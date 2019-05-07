/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTemporaryFileURL<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithData_filename<R = unknown, P0 = unknown, P1 = unknown>(_initWithData: P0, _filename: P1): R;
    url<R = NSURL>(): R;
  }
  namespace __NSTemporaryFileURL {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = __NSTemporaryFileURL>(): R;
      new: <R = __NSTemporaryFileURL>() => R;
    }
  }
}
