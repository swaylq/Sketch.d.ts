/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotateCounterclockwiseAction<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
    label<R = unknown>(): R;
    rotate90CC<R = void, P0 = unknown>(_rotate90CC: P0): R;
  }
  namespace MSRotateCounterclockwiseAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
      alloc<R = MSRotateCounterclockwiseAction>(): R;
      new: <R = MSRotateCounterclockwiseAction>() => R;
    }
  }
}

declare const MSRotateCounterclockwiseAction: cocoa.MSRotateCounterclockwiseAction.CLASS;
