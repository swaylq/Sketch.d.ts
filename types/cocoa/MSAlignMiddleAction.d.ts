/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignMiddleAction<T0 = void, T1 = void, T2 = void> extends MSTextVerticalAlignmentAction {
    label<R = unknown>(): R;
    alignMiddle<R = void, P0 = unknown>(_alignMiddle: P0): R;
  }
  namespace MSAlignMiddleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTextVerticalAlignmentAction {
      alloc<R = MSAlignMiddleAction>(): R;
      new: <R = MSAlignMiddleAction>() => R;
    }
  }
}

declare const MSAlignMiddleAction: cocoa.MSAlignMiddleAction.CLASS;
