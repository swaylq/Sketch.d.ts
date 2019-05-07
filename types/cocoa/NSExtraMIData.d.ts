/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtraMIData<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSExtraMIData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSExtraMIData>(): R;
      new: <R = NSExtraMIData>() => R;
    }
  }
}

declare const NSExtraMIData: cocoa.NSExtraMIData.CLASS;
