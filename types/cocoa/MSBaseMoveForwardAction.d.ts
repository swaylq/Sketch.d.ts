/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseMoveForwardAction<T0 = void, T1 = void, T2 = void> extends MSBaseMoveAction {}
  namespace MSBaseMoveForwardAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseMoveAction {
      alloc<R = MSBaseMoveForwardAction>(): R;
      new: <R = MSBaseMoveForwardAction>() => R;
    }
  }
}

declare const MSBaseMoveForwardAction: cocoa.MSBaseMoveForwardAction.CLASS;
