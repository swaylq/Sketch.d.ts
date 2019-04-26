/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyPortraitOrientationAction<T0 = void, T1 = void, T2 = void> extends MSApplyOrientationAction {
    label<R = unknown>(): R;
    applyPortraitOrientation<R = void, P0 = unknown>(_applyPortraitOrientation: P0): R;
  }
  namespace MSApplyPortraitOrientationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSApplyOrientationAction {
      alloc<R = MSApplyPortraitOrientationAction>(): R;
      new: <R = MSApplyPortraitOrientationAction>() => R;
    }
  }
}

declare const MSApplyPortraitOrientationAction: cocoa.MSApplyPortraitOrientationAction.CLASS;
