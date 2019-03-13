/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHitTestResult<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    overrideRepresentation<R = MSOverrideRepresentation>(): R;
    setOverrideRepresentation<R = void, P0 = MSOverrideRepresentation>(_v: P0): R;
    layer<R = MSLayer>(): R;
    setLayer<R = void, P0 = MSLayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSHitTestResult<T = any> extends NSObject {
      alloc<R = MSHitTestResult>(): R;
      new: <R = MSHitTestResult>() => R;
    }
  }
}

declare const MSHitTestResult: cocoa.classes.MSHitTestResult;
