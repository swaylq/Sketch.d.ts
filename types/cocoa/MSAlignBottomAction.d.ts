/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignBottomAction<T0 = void, T1 = void, T2 = void> extends MSTextVerticalAlignmentAction {
    label<R = unknown>(): R;
    alignBottom<R = void, P0 = unknown>(_alignBottom: P0): R;
  }
  namespace MSAlignBottomAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTextVerticalAlignmentAction {
      alloc<R = MSAlignBottomAction>(): R;
      new: <R = MSAlignBottomAction>() => R;
    }
  }
}

declare const MSAlignBottomAction: cocoa.MSAlignBottomAction.CLASS;
