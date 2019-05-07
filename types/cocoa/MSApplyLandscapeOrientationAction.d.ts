/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyLandscapeOrientationAction<T0 = void, T1 = void, T2 = void> extends MSApplyOrientationAction {
    label<R = unknown>(): R;
    applyLandscapeOrientation<R = void, P0 = unknown>(_applyLandscapeOrientation: P0): R;
  }
  namespace MSApplyLandscapeOrientationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSApplyOrientationAction {
      alloc<R = MSApplyLandscapeOrientationAction>(): R;
      new: <R = MSApplyLandscapeOrientationAction>() => R;
    }
  }
}

declare const MSApplyLandscapeOrientationAction: cocoa.MSApplyLandscapeOrientationAction.CLASS;
