/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveBackwardAction<T0 = void, T1 = void, T2 = void> extends MSBaseMoveBackwardAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveBackward<R = void, P0 = unknown>(_moveBackward: P0): R;
  }
  namespace MSMoveBackwardAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseMoveBackwardAction {
      alloc<R = MSMoveBackwardAction>(): R;
      new: <R = MSMoveBackwardAction>() => R;
    }
  }
}

declare const MSMoveBackwardAction: cocoa.MSMoveBackwardAction.CLASS;
