/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeTouchGroupAction<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSCurveModeTouchGroupAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSCurveModeTouchGroupAction>(): R;
      new: <R = MSCurveModeTouchGroupAction>() => R;
    }
  }
}

declare const MSCurveModeTouchGroupAction: cocoa.MSCurveModeTouchGroupAction.CLASS;
