/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseMoveBackwardAction<T0 = void, T1 = void, T2 = void> extends MSBaseMoveAction {}
  namespace MSBaseMoveBackwardAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseMoveAction {
      alloc<R = MSBaseMoveBackwardAction>(): R;
      new: <R = MSBaseMoveBackwardAction>() => R;
    }
  }
}

declare const MSBaseMoveBackwardAction: cocoa.MSBaseMoveBackwardAction.CLASS;
