/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectInstance<T0 = void, T1 = void, T2 = void> {}
  namespace MSSharedObjectInstance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const MSSharedObjectInstance: cocoa.MSSharedObjectInstance.CLASS;
