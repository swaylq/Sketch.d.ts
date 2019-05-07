/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleHUDAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    mainHUD<R = unknown>(): R;
    toggleHUD<R = void, P0 = unknown>(_toggleHUD: P0): R;
  }
  namespace MSToggleHUDAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSToggleHUDAction>(): R;
      new: <R = MSToggleHUDAction>() => R;
    }
  }
}

declare const MSToggleHUDAction: cocoa.MSToggleHUDAction.CLASS;
