/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddShadowAction<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
    addShadow<R = void, P0 = unknown>(_addShadow: P0): R;
  }
  namespace MSAddShadowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
      alloc<R = MSAddShadowAction>(): R;
      new: <R = MSAddShadowAction>() => R;
    }
  }
}

declare const MSAddShadowAction: cocoa.MSAddShadowAction.CLASS;
