/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeMirroredAction<T0 = void, T1 = void, T2 = void> extends MSCurveModeAdjustAction {
    label<R = unknown>(): R;
  }
  namespace MSCurveModeMirroredAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCurveModeAdjustAction {
      alloc<R = MSCurveModeMirroredAction>(): R;
      new: <R = MSCurveModeMirroredAction>() => R;
    }
  }
}

declare const MSCurveModeMirroredAction: cocoa.MSCurveModeMirroredAction.CLASS;
