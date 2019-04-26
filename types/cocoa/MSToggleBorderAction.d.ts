/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleBorderAction<T0 = void, T1 = void, T2 = void> extends MSToggleStylePartAction {
    label<R = unknown>(): R;
    toggleBorder<R = void, P0 = unknown>(_toggleBorder: P0): R;
  }
  namespace MSToggleBorderAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleStylePartAction {
      alloc<R = MSToggleBorderAction>(): R;
      new: <R = MSToggleBorderAction>() => R;
    }
  }
}

declare const MSToggleBorderAction: cocoa.MSToggleBorderAction.CLASS;
