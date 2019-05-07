/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyleReference<T0 = void, T1 = void, T2 = void> extends MSShareableObjectReference {
    localLocationPath<R = unknown>(): R;
    sharedObjectID<R = unknown>(): R;
    style<R = MSStyle>(): R;
  }
  namespace MSSharedStyleReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSShareableObjectReference {
      alloc<R = MSSharedStyleReference>(): R;
      new: <R = MSSharedStyleReference>() => R;
    }
  }
}

declare const MSSharedStyleReference: cocoa.MSSharedStyleReference.CLASS;
