/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileURLHandle<T = any> extends NSURLHandle {
    _backgroundFileLoadCompleted<R = void, P0 = unknown>(__backgroundFileLoadCompleted: P0): R;
  }
  namespace classes {
    export interface NSFileURLHandle<T = any> extends NSURLHandle {
      alloc<R = NSFileURLHandle>(): R;
      new: <R = NSFileURLHandle>() => R;
    }
  }
}

declare const NSFileURLHandle: cocoa.classes.NSFileURLHandle;