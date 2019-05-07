/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleFillAction<T0 = void, T1 = void, T2 = void> extends MSToggleStylePartAction {
    label<R = unknown>(): R;
    toggleFill<R = void, P0 = unknown>(_toggleFill: P0): R;
  }
  namespace MSToggleFillAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleStylePartAction {
      alloc<R = MSToggleFillAction>(): R;
      new: <R = MSToggleFillAction>() => R;
    }
  }
}

declare const MSToggleFillAction: cocoa.MSToggleFillAction.CLASS;
