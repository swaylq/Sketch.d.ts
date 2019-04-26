/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHitTestResult<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    overrideRepresentation<R = MSOverrideRepresentation>(): R;
    setOverrideRepresentation<R = void, P0 = MSOverrideRepresentation>(_v: P0): R;
    layer<R = MSLayer>(): R;
    setLayer<R = void, P0 = MSLayer>(_v: P0): R;
  }
  namespace MSHitTestResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSHitTestResult>(): R;
      new: <R = MSHitTestResult>() => R;
    }
  }
}

declare const MSHitTestResult: cocoa.MSHitTestResult.CLASS;
