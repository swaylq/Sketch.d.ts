/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileURLHandle<T0 = void, T1 = void, T2 = void> extends NSURLHandle {
    _backgroundFileLoadCompleted<R = void, P0 = unknown>(__backgroundFileLoadCompleted: P0): R;
  }
  namespace NSFileURLHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSURLHandle {
      alloc<R = NSFileURLHandle>(): R;
      new: <R = NSFileURLHandle>() => R;
    }
  }
}

declare const NSFileURLHandle: cocoa.NSFileURLHandle.CLASS;
