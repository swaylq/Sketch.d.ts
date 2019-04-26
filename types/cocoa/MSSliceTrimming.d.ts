/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceTrimming<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSSliceTrimming {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSliceTrimming>(): R;
      new: <R = MSSliceTrimming>() => R;
      simpleSafeRectFromLayerAncestry<R = CGRect, P0 = unknown>(_simpleSafeRectFromLayerAncestry: P0): R;
      safeRectForLayerAncestry<R = CGRect, P0 = unknown>(_safeRectForLayerAncestry: P0): R;
      exportRequestFromLayerAncestry<R = unknown, P0 = unknown>(_exportRequestFromLayerAncestry: P0): R;
      _trimmedRectFromLayerAncestry<R = CGRect, P0 = unknown>(__trimmedRectFromLayerAncestry: P0): R;
      trimmedRectForLayerAncestry<R = CGRect, P0 = unknown>(_trimmedRectForLayerAncestry: P0): R;
      trimSlice<R = void, P0 = unknown>(_trimSlice: P0): R;
    }
  }
}

declare const MSSliceTrimming: cocoa.MSSliceTrimming.CLASS;
