/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSQuietCheckForUpdatesAction<T0 = void, T1 = void, T2 = void> extends MSSilentCheckForUpdatesAction {}
  namespace MSQuietCheckForUpdatesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSilentCheckForUpdatesAction {
      alloc<R = MSQuietCheckForUpdatesAction>(): R;
      new: <R = MSQuietCheckForUpdatesAction>() => R;
    }
  }
}

declare const MSQuietCheckForUpdatesAction: cocoa.MSQuietCheckForUpdatesAction.CLASS;
