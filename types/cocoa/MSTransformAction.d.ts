/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTransformAction<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    transform<R = void, P0 = unknown>(_transform: P0): R;
  }
  namespace MSTransformAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
      alloc<R = MSTransformAction>(): R;
      new: <R = MSTransformAction>() => R;
    }
  }
}

declare const MSTransformAction: cocoa.MSTransformAction.CLASS;
