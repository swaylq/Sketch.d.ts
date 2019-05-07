/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveToFrontAction<T0 = void, T1 = void, T2 = void> extends MSBaseMoveForwardAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveToFront<R = void, P0 = unknown>(_moveToFront: P0): R;
  }
  namespace MSMoveToFrontAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseMoveForwardAction {
      alloc<R = MSMoveToFrontAction>(): R;
      new: <R = MSMoveToFrontAction>() => R;
    }
  }
}

declare const MSMoveToFrontAction: cocoa.MSMoveToFrontAction.CLASS;
