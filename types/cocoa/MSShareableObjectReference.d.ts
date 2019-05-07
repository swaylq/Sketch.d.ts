/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShareableObjectReference<T0 = void, T1 = void, T2 = void> extends NSObject, BCSortableProtocol, MSSharedObjectStylingProtocol {}
  namespace MSShareableObjectReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, BCSortableProtocol, MSSharedObjectStylingProtocol {
      alloc<R = MSShareableObjectReference>(): R;
      new: <R = MSShareableObjectReference>() => R;
      referenceForShareableObject_inLibrary<R = unknown, P0 = MSModelObject, P1 = unknown>(_referenceForShareableObject: P0, _inLibrary: P1): R;
    }
  }
}

declare const MSShareableObjectReference: cocoa.MSShareableObjectReference.CLASS;
