/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSilentCheckForUpdatesAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
    updateController<R = unknown>(): R;
  }
  namespace MSSilentCheckForUpdatesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSSilentCheckForUpdatesAction>(): R;
      new: <R = MSSilentCheckForUpdatesAction>() => R;
    }
  }
}

declare const MSSilentCheckForUpdatesAction: cocoa.MSSilentCheckForUpdatesAction.CLASS;
