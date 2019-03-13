/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSQuietCheckForUpdatesAction<T = any> extends MSSilentCheckForUpdatesAction {}
  namespace classes {
    export interface MSQuietCheckForUpdatesAction<T = any> extends MSSilentCheckForUpdatesAction {
      alloc<R = MSQuietCheckForUpdatesAction>(): R;
      new: <R = MSQuietCheckForUpdatesAction>() => R;
    }
  }
}

declare const MSQuietCheckForUpdatesAction: cocoa.classes.MSQuietCheckForUpdatesAction;