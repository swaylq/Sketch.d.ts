/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddInnerShadowAction<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
    addInnerShadow<R = void, P0 = unknown>(_addInnerShadow: P0): R;
  }
  namespace MSAddInnerShadowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
      alloc<R = MSAddInnerShadowAction>(): R;
      new: <R = MSAddInnerShadowAction>() => R;
    }
  }
}

declare const MSAddInnerShadowAction: cocoa.MSAddInnerShadowAction.CLASS;
