/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabSearchTabInfoForFiltering<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSTabSearchTabInfoForFiltering {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTabSearchTabInfoForFiltering>(): R;
      new: <R = NSTabSearchTabInfoForFiltering>() => R;
      infoWithTitle<R = unknown, P0 = unknown>(_infoWithTitle: P0): R;
    }
  }
}

declare const NSTabSearchTabInfoForFiltering: cocoa.NSTabSearchTabInfoForFiltering.CLASS;
