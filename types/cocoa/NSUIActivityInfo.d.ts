/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIActivityInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    removeProvider<R = void, P0 = unknown>(_removeProvider: P0): R;
    addProvider<R = void, P0 = unknown>(_addProvider: P0): R;
    dealloc<R = void>(): R;
    automaticallyGenerated<R = boolean>(): R;
    setAutomaticallyGenerated<R = void, P0 = boolean>(_v: P0): R;
    providerCount<R = number>(): R;
    providers<R = NSArray>(): R;
  }
  namespace NSUIActivityInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUIActivityInfo>(): R;
      new: <R = NSUIActivityInfo>() => R;
    }
  }
}

declare const NSUIActivityInfo: cocoa.NSUIActivityInfo.CLASS;
