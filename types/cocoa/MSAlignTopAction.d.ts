/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignTopAction<T0 = void, T1 = void, T2 = void> extends MSTextVerticalAlignmentAction {
    label<R = unknown>(): R;
    alignTop<R = void, P0 = unknown>(_alignTop: P0): R;
  }
  namespace MSAlignTopAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTextVerticalAlignmentAction {
      alloc<R = MSAlignTopAction>(): R;
      new: <R = MSAlignTopAction>() => R;
    }
  }
}

declare const MSAlignTopAction: cocoa.MSAlignTopAction.CLASS;
