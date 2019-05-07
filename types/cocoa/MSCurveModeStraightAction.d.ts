/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeStraightAction<T0 = void, T1 = void, T2 = void> extends MSCurveModeAdjustAction {
    label<R = unknown>(): R;
  }
  namespace MSCurveModeStraightAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCurveModeAdjustAction {
      alloc<R = MSCurveModeStraightAction>(): R;
      new: <R = MSCurveModeStraightAction>() => R;
    }
  }
}

declare const MSCurveModeStraightAction: cocoa.MSCurveModeStraightAction.CLASS;
