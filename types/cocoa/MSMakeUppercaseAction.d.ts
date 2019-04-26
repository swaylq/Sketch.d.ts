/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMakeUppercaseAction<T0 = void, T1 = void, T2 = void> extends MSTextTransformAction {
    label<R = unknown>(): R;
    makeUppercase<R = void, P0 = unknown>(_makeUppercase: P0): R;
  }
  namespace MSMakeUppercaseAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTextTransformAction {
      alloc<R = MSMakeUppercaseAction>(): R;
      new: <R = MSMakeUppercaseAction>() => R;
    }
  }
}

declare const MSMakeUppercaseAction: cocoa.MSMakeUppercaseAction.CLASS;
