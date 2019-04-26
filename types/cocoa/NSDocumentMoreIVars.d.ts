/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentMoreIVars<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    recentDocumentID<R = number>(): R;
    setRecentDocumentID<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSDocumentMoreIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDocumentMoreIVars>(): R;
      new: <R = NSDocumentMoreIVars>() => R;
    }
  }
}

declare const NSDocumentMoreIVars: cocoa.NSDocumentMoreIVars.CLASS;
