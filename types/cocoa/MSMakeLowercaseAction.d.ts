/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMakeLowercaseAction<T0 = void, T1 = void, T2 = void> extends MSTextTransformAction {
    label<R = unknown>(): R;
    makeLowercase<R = void, P0 = unknown>(_makeLowercase: P0): R;
  }
  namespace MSMakeLowercaseAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTextTransformAction {
      alloc<R = MSMakeLowercaseAction>(): R;
      new: <R = MSMakeLowercaseAction>() => R;
    }
  }
}

declare const MSMakeLowercaseAction: cocoa.MSMakeLowercaseAction.CLASS;
