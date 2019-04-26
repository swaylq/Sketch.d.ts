/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotateClockwiseAction<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
    label<R = unknown>(): R;
    rotate90C<R = void, P0 = unknown>(_rotate90C: P0): R;
  }
  namespace MSRotateClockwiseAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
      alloc<R = MSRotateClockwiseAction>(): R;
      new: <R = MSRotateClockwiseAction>() => R;
    }
  }
}

declare const MSRotateClockwiseAction: cocoa.MSRotateClockwiseAction.CLASS;
