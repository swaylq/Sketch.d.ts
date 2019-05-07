/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTrailingLayerInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    direction<R = number>(): R;
    setDirection<R = void, P0 = number>(_v: P0): R;
    trailingLayers<R = NSMapTable>(): R;
    setTrailingLayers<R = void, P0 = NSMapTable>(_v: P0): R;
    oldRect<R = CGRect>(): R;
    setOldRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace MSTrailingLayerInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTrailingLayerInfo>(): R;
      new: <R = MSTrailingLayerInfo>() => R;
    }
  }
}

declare const MSTrailingLayerInfo: cocoa.MSTrailingLayerInfo.CLASS;
