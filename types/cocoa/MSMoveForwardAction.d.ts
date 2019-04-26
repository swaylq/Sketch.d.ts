/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveForwardAction<T0 = void, T1 = void, T2 = void> extends MSBaseMoveForwardAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveForward<R = void, P0 = unknown>(_moveForward: P0): R;
  }
  namespace MSMoveForwardAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseMoveForwardAction {
      alloc<R = MSMoveForwardAction>(): R;
      new: <R = MSMoveForwardAction>() => R;
    }
  }
}

declare const MSMoveForwardAction: cocoa.MSMoveForwardAction.CLASS;
