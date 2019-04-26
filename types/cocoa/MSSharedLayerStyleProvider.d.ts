/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedLayerStyleProvider<T0 = void, T1 = void, T2 = void> extends MSForeignObjectProvider {
    objectType<R = number>(): R;
    foreignObjects<R = unknown>(): R;
  }
  namespace MSSharedLayerStyleProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSForeignObjectProvider {
      alloc<R = MSSharedLayerStyleProvider>(): R;
      new: <R = MSSharedLayerStyleProvider>() => R;
    }
  }
}

declare const MSSharedLayerStyleProvider: cocoa.MSSharedLayerStyleProvider.CLASS;
