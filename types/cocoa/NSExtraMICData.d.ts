/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtraMICData<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSExtraMICData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSExtraMICData>(): R;
      new: <R = NSExtraMICData>() => R;
    }
  }
}

declare const NSExtraMICData: cocoa.NSExtraMICData.CLASS;
