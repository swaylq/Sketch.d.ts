/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotateAction<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    rotationBarAction<R = void, P0 = unknown>(_rotationBarAction: P0): R;
    rotate<R = void, P0 = unknown>(_rotate: P0): R;
  }
  namespace MSRotateAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
      alloc<R = MSRotateAction>(): R;
      new: <R = MSRotateAction>() => R;
    }
  }
}

declare const MSRotateAction: cocoa.MSRotateAction.CLASS;
