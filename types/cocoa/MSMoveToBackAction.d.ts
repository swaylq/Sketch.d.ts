/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveToBackAction<T0 = void, T1 = void, T2 = void> extends MSBaseMoveBackwardAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveToBack<R = void, P0 = unknown>(_moveToBack: P0): R;
  }
  namespace MSMoveToBackAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseMoveBackwardAction {
      alloc<R = MSMoveToBackAction>(): R;
      new: <R = MSMoveToBackAction>() => R;
    }
  }
}

declare const MSMoveToBackAction: cocoa.MSMoveToBackAction.CLASS;
