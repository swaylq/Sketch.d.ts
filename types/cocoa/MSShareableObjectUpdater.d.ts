/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShareableObjectUpdater<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    shareableObjectType<R = number>(): R;
    setShareableObjectType<R = void, P0 = number>(_v: P0): R;
    selectedLayers<R = MSLayerArray>(): R;
    setSelectedLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
  }
  namespace MSShareableObjectUpdater {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSShareableObjectUpdater>(): R;
      new: <R = MSShareableObjectUpdater>() => R;
    }
  }
}

declare const MSShareableObjectUpdater: cocoa.MSShareableObjectUpdater.CLASS;
